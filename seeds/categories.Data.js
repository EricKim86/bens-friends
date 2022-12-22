const { Categories } = require('../models');

const categorydata = [
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

const seedCategories = () => Categories.bulkCreate(categorydata);

module.exports = seedCategories;

