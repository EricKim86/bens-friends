const User = require("./user");
const Orders = require("./orders");
const Collections = require("./collection");
const Categories = require("./categories");
const Products = require("./products");
const Order_items = require("./order_items");
const CollectionProduct = require("./collectionProduct");


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

Collections.belongsToMany(Products, {
    through: CollectionProduct,
    foreignKey: 'collections_id',
});

Products.belongsToMany(Collections, {
    through: CollectionProduct,
    foreignKey: 'products_id',
});

// User.belongsToMany(Products, {
//     through: CollectionProduct,
//     foreignKey: 'user_id',
// });


module.exports = { User, Orders, Collections, Categories, Products, Order_items, CollectionProduct };

