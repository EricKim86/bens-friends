const { User } = require('../models');

const userData = [

    //User Data
    {
        user_name: 'Eric',
        email: 'email@email.com',
        password: 'test123'
    },
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

