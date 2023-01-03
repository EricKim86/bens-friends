const router = require('express').Router();
const { request } = require('express');
const { User, Products, Orders } = require('../models');


// render homepage
router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});


// GET a user for profile
router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id)

    const userProfile = userData.get({ plain: true });

    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }

      res.render('profile', {
        userProfile,
        loggedIn: req.session.loggedIn,
        countVisit: req.session.countVisit,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// GET a user for explore
router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id)

    const userInfo = userData.get({ plain: true });

    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }

      res.render('user', {
        userInfo,
        loggedIn: req.session.loggedIn,
        countVisit: req.session.countVisit,
      });
    });


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all Users for Explore
router.get('/explore', async (req, res) => {
  try {
    const userData = await User.findAll({});

    const userProfile = userData.map((user) =>
      user.get({ plain: true })
    );

    res.render('explore', {
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

// GET all products in cart
router.get('/cart', async (req, res) => {
  try {
    const productData = await Products.findAll({
    });

    const cartList = productData.map((products) =>
      products.get({ plain: true })
    );

    res.render('cart', {
      cartList,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE a new order
router.post('/order', async (req, res) => {
  try {
    const orderData = await Orders.create({
      user_id: req.body.user_id,
      status: req.body.status,
      products_id: req.body.products_id,
    });

    req.session.save(() => {
      req.session.user_id = orderData.id;
      req.session.loggedIn = true;

      res.status(200).json(orderData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET a product by ID
router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Products.findByPk(req.params.id)

    const products = productData.get({ plain: true });
    res.render('productDetail', {
      products,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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