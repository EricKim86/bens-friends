const router = require('express').Router();
const { User } = require('../models');
const { Products } = require('../models');

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


  // GET all products
  router.get('/products', async (req, res) => {
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

  // GET one product
// router.get('/products/:id', async (req, res) => {
//   try {
//     const productData = await products.findByPk(req.params.id);

//     const products = productData.get({ plain: true });
//     res.render('products', { products, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


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

  // myprofile route
router.get('/myprofile', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('myprofile');
});

  // explore route
router.get('/explore', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('explore');
});

  // shop route
router.get('/shop', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('shop');
});

  
  module.exports = router;