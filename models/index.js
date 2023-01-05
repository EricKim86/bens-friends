const User = require("./user");
const Orders = require("./orders");
const Collection = require("./collection");
const Categories = require("./categories");
const Products = require("./products");
const Order_items = require("./order_items");


User.hasMany(Orders, {
    foreignKey: 'user_id',
});

Orders.belongsTo(User, {
    foreignKey: 'user_id',
});

Orders.belongsToMany(Products, {
    through: Order_items,
    foreignKey: 'orders_id',
});

Products.belongsToMany(Orders, {
    through: Order_items,
    foreignKey: 'products_id',
});

module.exports = { User, Orders, Collection, Categories, Products, Order_items };

