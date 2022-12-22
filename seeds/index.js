const sequelize = require('../config/connection');
const seedProducts = require('./products');
const seedCategories = require('./categories');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProducts();
  await seedCategories();


  process.exit(0);
};

seedAll();