const { User } = require('../models');

const userData = [

    //User Data
    {
        user_name: 'Eric',
        email: 'eric@email.com',
        password: 'test123456789',
        city: 'North Wales',
        bio: 'My name is Eric and I assisted in creating this wonderful space for like-minded individuals to share their appreciation of Ben.'
    },
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

