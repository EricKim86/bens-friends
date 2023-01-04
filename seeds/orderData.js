const { Orders } = require('../models');

const orderData = [
    {
        user_id: 1,
        products_id: 5,
    },
];

const seedOrderData = () => Orders.bulkCreate(orderData);

module.exports = seedOrderData;

