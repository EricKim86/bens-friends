const { User } = require('../models');

const userData = [

    //User Data
    {
        user_name: 'Eric',
        email: 'eric@email.com',
        password: 'test123456789',
        city: 'North Wales',
        bio: 'My name is Eric and I assisted in designing this application.  Our collective goal was to create a place where individuals can come together and celebrate their appreciation for Ben.'
    },
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

