const User = require("./user");
const Orders = require("./orders");
// const Order_items = require("./order_items");
const Collection = require("./collection");
const Categories = require("./categories");
const Products = require("./products");

User.hasMany(Orders, {
    foreignKey: 'user_id',
});

Orders.belongsTo(User, {
    foreignKey: 'user_id',
});

Orders.hasMany(Products, {
    foreignKey: 'orders_id',
});

Products.belongsTo(Orders, {
    foreignKey: 'orders_id',
});

module.exports = { User, Orders, Collection, Categories, Products };

