const sequelize = require('../config/connection');
const seedProducts = require('./productsData');
const seedCategories = require('./categories.Data.js');
const seedUser = require('./user.Data.js');
const seedOrderItems = require('./order_itemsData.js');
const seedOrders = require('./orderData.js');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCategories();
  await seedProducts();
  await seedUser();
  await seedOrders();
  await seedOrderItems();
  process.exit(0);
};

seedAll();