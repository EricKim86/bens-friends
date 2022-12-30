const { Products } = require('../models');

const productdata = [

    //Apparel Products
    {
        prod_name: `Limited Edition Ben t-Shirt`,
        prod_description: '100% cotton backwards NEB shirt.',
        price: 20,
        status: true,
        categories_id: 1,
        filename: '1-1.png',
        feature1: '100% cotton',
        feature2: 'Actually it is 115% cotton',
        feature3: 'Great for coding HTML',
    },
    {
        prod_name: `D&D t-shirt`,
        prod_description: 'D&D t-shirt w/ no logo or artwork.',
        price: 35,
        status: true,
        categories_id: 1,
        filename: '1-2.png',
        feature1: 'Automatically grants the user +15 HP',
        feature2: 'Also deducts +15hp',
        feature3: 'Comes in various colors that are then dyed black',
    },
    {
        prod_name: `Evil Justin Baseball Cap`,
        prod_description: `Fitted baseball cap inspired by Ben's nemsis, Evil Justin.`,
        price: 40,
        status: true,
        categories_id: 1,
        filename: '1-3.png',
        feature1: 'Now 30% more evil!',
        feature2: 'Spelled with two Ls to emphasize how evil it is',
        feature3: 'Great gift for children',
    },
    //Tableware Products
    {
        prod_name: `Limited Edition Ben Mug`,
        prod_description: 'Keep your coffee warm in this limited edition Ben Mug.  Great gift for anyone.',
        price: 8,
        status: true,
        categories_id: 2,
        filename: '2-1.png',
        feature1: 'Keeps coffee hot but not too hot',
        feature2: 'Plays a recording reminding you how terrible you are after ever sip',
        feature3: 'Comes in two colors, both are black',
    },
    {
        prod_name: `Fancy Custom Ben Fork`,
        prod_description: 'Custom fork designed by Ben in the shape of a spoon.',
        price: 8,
        status: true,
        categories_id: 2,
        filename: '2-2.png',
        feature1: '100% high quality plastic',
        feature2: 'Does not bend',
        feature3: 'Can be used as a spoon',
    },

    //Figure Products
    {
        prod_name: `Rare Ben's Pirate Bobblehead`,
        prod_description: 'A head that bobbles outfitted in a fun pirate costume featuring a glitching hat and eye patch.',
        price: 10,
        status: true,
        categories_id: 3,
        filename: '3-1.png',
        feature1: 'Bobble radius has been increased by 15%',
        feature2: 'The glitching hat and eye patch are a feature',
        feature3: 'So rare that none actually exist',
    },
    {
        prod_name: `2nd Edition Ben w/ Suit of Armor POP Figure`,
        prod_description: 'Ben POP figure with wearing a shiny piece of level 14 steel armor.',
        price: 15,
        status: true,
        categories_id: 3,
        filename: '3-2.png',
        feature1: 'armor now shines 27% brighter',
        feature2: 'Glows in the dark, but no really',
        feature3: 'Made from the tears of students',
    },
    {
        prod_name: `Ben Action Figure`,
        prod_description: 'Life sized action figure shrunken down to action figure size with a kung-fu grip.',
        price: 18,
        status: true,
        categories_id: 3,
        filename: '3-3.png',
        feature1: 'Life Size',
        feature2: 'But also compact',
        feature3: 'Realistic movement',
    },
    {
        prod_name: `3d Printed Ben D&D Character`,
        prod_description: '3d printed model of Ben as a D&D level 9 mage.',
        price: 22,
        status: true,
        categories_id: 3,
        filename: '3-4.png',
        feature1: 'Not actually made from a 3d printer',
        feature2: 'Cannot be used in a D&D game',
        feature3: 'Materials costs more than the item is selling for',
    },
    {
        prod_name: `Castle Play Set w/ Real Working Drawbridge`,
        prod_description: '10 foot castle play set w/ a working wooden drawbridge and fillable moat.',
        price: 50,
        status: true,
        categories_id: 3,
        filename: '3-5.png',
        feature1: 'Moat comes pre-filled with water',
        feature2: 'Castle comes 100% pre-assembled',
        feature3: 'Ships via freight in a large wooden box',
    },

    //Comic Products
    {
        prod_name: `First Edition The Adventures of Benjamin`,
        prod_description: 'First issue of The Adventures of Benjamin, the newest super hero comic revolving around the every day life of Ben.',
        price: 12,
        status: true,
        categories_id: 4,
        filename: '4-1.png',
        feature1: '100% AI generated images and captions',
        feature2: 'Only two pages long',
        feature3: 'One of the pages is the cover.',
    },
];

const seedProducts = () => Products.bulkCreate(productdata);

module.exports = seedProducts;

