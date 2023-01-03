const sequelize = require('../config/connection');
const seedProducts = require('./productsData');
const seedCategories = require('./categories.Data.js');
const seedUser = require('./user.Data.js');
const seedOrder = require("./cartData.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCategories();
  await seedProducts();
  await seedUser();
  await seedOrder();
  process.exit(0);
};

seedAll();