const router = require('express').Router();
const { User } = require('../models');

// GET all Users for homepage
router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
            attributes: ['user_name'],
      });
  
      const userProfile = userData.map((user) =>
        user.get({ plain: true })
      );
  
      res.render('test', {
        userProfile,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

  

  module.exports = router;