const { Product } = require('../models');

const productdata = [
    {
        prod_name: `Limited Edition Ben's t-shirt`,
        prod_description: 'Desc goes here',
        price: '$20',
        status: true,
        category_id: 1,
    },
    {
        name: `Limited Edition Ben's Mug`,
        description: 'Desc goes here',
        price: '$8',
        status: true,
        category_id: 2,
    },
    {
        name: `Rare Ben's Pirate Bobblehead`,
        description: 'Desc goes here',
        price: '$15',
        status: true,
        category_id: 3,
    },
    {
        name: `First Edition The Adventures of Benjamin`,
        description: 'Desc goes here',
        price: '$12',
        status: true,
        category_id: 4,
    },
   
];

const seedProducts = () => Product.bulkCreate(productdata);

module.exports = seedProducts;

