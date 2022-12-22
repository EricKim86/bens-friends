const { Products } = require('../models');

const productdata = [
    {
        prod_name: `Limited Edition Ben's t-shirt`,
        prod_description: 'Desc goes here',
        price: 20,
        status: true,
        categories_id: 1,
    },
    {
        prod_name: `Limited Edition Ben's Mug`,
        prod_description: 'Desc goes here',
        price: 8,
        status: true,
        categories_id: 2,
    },
    {
        prod_name: `Rare Ben's Pirate Bobblehead`,
        prod_description: 'Desc goes here',
        price: 15,
        status: true,
        categories_id: 3,
    },
    {
        prod_name: `First Edition The Adventures of Benjamin`,
        prod_description: 'Desc goes here',
        price: 12,
        status: true,
        categories_id: 4,
    },
   
];

const seedProducts = () => Products.bulkCreate(productdata);

module.exports = seedProducts;

