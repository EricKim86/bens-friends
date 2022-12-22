const sequelize = require('../config/connection');
const seedProducts = require('./products');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProducts();


  process.exit(0);
};

seedAll();