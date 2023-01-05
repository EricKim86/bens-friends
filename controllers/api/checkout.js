const router = require('express').Router();
const { Orders, Collections, Order_items, CollectionProduct } = require('../../models');

router.post('/', async (req, res) => {

    const collections = await Collections.findOne({
        where: { user_id: req.session.user_id },

    })
    const order = await Orders.findOne({
        where: { user_id: req.session.user_id },

    })
    const orderItems = await Order_items.findAll({
        where: { orders_id: order.id },
    })
    while (orderItems.length) {
        const product = orderItems.pop()

        const collectionProduct = await CollectionProduct.findOne({
            where: {
                collections_id: collections.id,
                products_id: product.products_id,
            }
        })
        if (!collectionProduct) {
            await CollectionProduct.create({
                user_id: req.body.user_id,
                collections_id: collections.id,
                products_id: product.products_id,
            })
        }
    }
    await Order_items.destroy({
        where: {
            orders_id: order.id,
        }
    })
    res.json("Order has been submitted and added to your collection!")
});


module.exports = router;
