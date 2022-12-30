const { User } = require('../models');

const userData = [

    //User Data
    {
        user_name: 'Eric',
        email: 'eric@email.com',
        password: 'test123456789',
        city: 'North Wales',
        bio: 'Eric'
    },
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

