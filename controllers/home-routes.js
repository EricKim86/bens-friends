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
  
      res.render('home', {
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

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});


router.get('/myprofile', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('myprofile');
});

router.get('/explore', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('explore');
});

router.get('/shop', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('shop');
});

  

  module.exports = router;