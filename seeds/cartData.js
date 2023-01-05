const { Orders } = require('../models');

const orderdata = [
    {
        user_id: 1,
        products_id: 5,
    },
];

const seedOrder = () => Orders.bulkCreate(orderdata);

module.exports = seedOrder;

