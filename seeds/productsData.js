const { Products } = require('../models');

const productdata = [

    //Apparel Products
    {
        prod_name: `Limited Edition Ben's t-shirt`,
        prod_description: 'Desc goes here',
        price: 20,
        status: true,
        categories_id: 1,
    },

    //Tableware Products
    {
        prod_name: `Limited Edition Ben's Mug`,
        prod_description: 'Desc goes here',
        price: 8,
        status: true,
        categories_id: 2,
    },

    //Figure Products
    {
        prod_name: `Rare Ben's Pirate Bobblehead`,
        prod_description: 'A head that bobbles outfitted in a fun pirate costume featuring a glitching hat and eye patch',
        price: 10,
        status: true,
        categories_id: 3,
    },
    {
        prod_name: `2nd Edition Ben w/ Suit of Armor POP Figure`,
        prod_description: 'Ben POP figure with wearing a shiny piece of level 14 steel armor',
        price: 15,
        status: true,
        categories_id: 3,
    },
    {
        prod_name: `Ben Action Figure`,
        prod_description: 'Life sized action figure shrunken down to action figure size with a kung fu grip',
        price: 18,
        status: true,
        categories_id: 3,
    },
    {
        prod_name: `3d Printed Ben D&D Character`,
        prod_description: '3d printed model of Ben as a D&D level 9 mage',
        price: 22,
        status: true,
        categories_id: 3,
    },
    {
        prod_name: `Castle Play Set w/ real working drawbridge`,
        prod_description: '10 foot castle play set w/ a working wooden drawbridge and fillable moat',
        price: 50,
        status: true,
        categories_id: 3,
    },

    //Comic Products
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

