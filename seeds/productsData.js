const { Products } = require('../models');

const productdata = [

    //Apparel Products
    {
        prod_name: `Limited Edition Ben t-shirt`,
        prod_description: '100% cotton backwards NEB shirt.',
        price: 20,
        status: true,
        categories_id: 1,
        filename: '1-1.png',
    },
    {
        prod_name: `D&D t-shirt`,
        prod_description: 'D&D t-shirt w/ no logo or artwork.',
        price: 35,
        status: true,
        categories_id: 1,
        filename: '1-2.png',
    },
    {
        prod_name: `Evil Justin Baseball Cap`,
        prod_description: `Fitted baseball cap inspired by Ben's nemsis, Evil Justin.`,
        price: 40,
        status: true,
        categories_id: 1,
        filename: '1-3.png',
    },
    //Tableware Products
    {
        prod_name: `Limited Edition Ben Mug`,
        prod_description: 'Keep your coffee warm in this limited edition Ben Mug.  Great gift for anyone.',
        price: 8,
        status: true,
        categories_id: 2,
        filename: '2-1.png',
    },
    {
        prod_name: `Fancy Custom Ben Fork`,
        prod_description: 'Custom fork designed by Ben in the shape of a spoon.',
        price: 8,
        status: true,
        categories_id: 2,
        filename: '2-2.png',
    },

    //Figure Products
    {
        prod_name: `Rare Ben's Pirate Bobblehead`,
        prod_description: 'A head that bobbles outfitted in a fun pirate costume featuring a glitching hat and eye patch.',
        price: 10,
        status: true,
        categories_id: 3,
        filename: '3-1.png',
    },
    {
        prod_name: `2nd Edition Ben w/ Suit of Armor POP Figure`,
        prod_description: 'Ben POP figure with wearing a shiny piece of level 14 steel armor.',
        price: 15,
        status: true,
        categories_id: 3,
        filename: '3-2.png',
    },
    {
        prod_name: `Ben Action Figure`,
        prod_description: 'Life sized action figure shrunken down to action figure size with a kung-fu grip.',
        price: 18,
        status: true,
        categories_id: 3,
        filename: '3-3.png',
    },
    {
        prod_name: `3d Printed Ben D&D Character`,
        prod_description: '3d printed model of Ben as a D&D level 9 mage.',
        price: 22,
        status: true,
        categories_id: 3,
        filename: '3-4.png',
    },
    {
        prod_name: `Castle Play Set w/ Real Working Drawbridge`,
        prod_description: '10 foot castle play set w/ a working wooden drawbridge and fillable moat.',
        price: 50,
        status: true,
        categories_id: 3,
        filename: '3-5.png',
    },

    //Comic Products
    {
        prod_name: `First Edition The Adventures of Benjamin`,
        prod_description: 'First issue of The Adventures of Benjamin, the newest super hero comic revolving around the every day life of Ben.',
        price: 12,
        status: true,
        categories_id: 4,
        filename: '4-1.png',
    },
];

const seedProducts = () => Products.bulkCreate(productdata);

module.exports = seedProducts;

