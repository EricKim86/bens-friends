const { Categories } = require('../models');

const categoriesdata = [
    {
        cat_name: `Apparel`,
    },
    {
        cat_name: `Tableware`,
    },
    {
        cat_name: `Comics`,
    },
    {
        cat_name: `Figures`,
    },
   
];

const seedCategories = () => Categories.bulkCreate(categoriesdata);
console.log(categoriesdata);

module.exports = seedCategories;

