const router = require('express').Router();
const { User } = require('../models');
const { Products } = require('../models');

// GET all Users for homepage
router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
            attributes: ['user_name', 'email'],
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


  // GET all products
  router.get('/shop', async (req, res) => {
    try {
      const productData = await Products.findAll({
      });
  
      const productList = productData.map((products) =>
        products.get({ plain: true })
      );
  
      res.render('products', {
        productList,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // profile route
router.get('/profile', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('profile');
});

  // explore route
router.get('/explore', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('explore');
});
  
  // login route
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
    // signup route
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });
  

  module.exports = router;