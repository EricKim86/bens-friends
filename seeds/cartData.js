const { Orders } = require('../models');

const orderdata = [

{
    user_id: 1,
    products_id: 1,

}

]

const seedOrders = () => Orders.bulkCreate(orderdata);

module.exports = seedOrders;