const { Order_items } = require('../models');

const orderItemsData = [
    {
        orders_id: 1,
        products_id: 5,
    },
];

const seedOrderItems = () => Order_items.bulkCreate(orderItemsData);

module.exports = seedOrderItems;

