const { User } = require('../models');

const userData = [

    //User Data
    {
        user_name: 'Eric',
        email: 'eric@email.com',
        password: 'test123456789',
        city: 'North Wales',
        bio: 'My name is Eric and I assisted in designing this application.  Our collective goal was to create a place where individuals can come together and celebrate their appreciation for Ben.',
        profile_image: 'profile23.png'
    },
    {
        user_name: 'Dylan',
        email: 'Dylan@email.com',
        password: 'test123456789',
        city: 'Milwaukee',
        bio: 'Our goal for this project was to create a social/e-commerce platform where users could purchase items they find interesting and share what they bought with their connections. We happen to all own items featuring Ben.',
        profile_image: 'profile24.jfif'
    },
    {
        user_name: 'SarahSuperFan',
        email: 'sarah@email.com',
        password: 'test123456789',
        city: 'Orlando',
        bio: 'I am not sure how I ended up on this website but I have no regrets!  Ben is awesome!',
        profile_image: 'profile1.avif'
    },
    {
        user_name: 'HenryTheGreat',
        email: 'henry@email.com',
        password: 'test123456789',
        city: 'New York',
        bio: 'I have lost 40 pounds, got a promotion at work, and won the lottery ever since I joined Bens Friends.',
        profile_image: 'profile3.avif'
    },
    {
        user_name: 'BigBiteJason',
        email: 'jason@email.com',
        password: 'test123456789',
        city: 'Dallas',
        bio: 'I was the most unpopular pup on the block until I joined Bens Friends.  After meeting all the members, now I do not feel as bad.',
        profile_image: 'profile15.avif'
    }
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

