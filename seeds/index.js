const sequelize = require('../config/connection');
const seedProducts = require('./productsData');
const seedCategories = require('./categories.Data.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedCategories();
  await seedProducts();
  process.exit(0);
};

seedAll();