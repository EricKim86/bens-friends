const router = require('express').Router();
const { request } = require('express');
const { User, Products, Orders, Order_items } = require('../models');


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

    const userProfile = userData.get({
      plain: true
    });

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

    const userInfo = userData.get({
      plain: true
    });

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
      user.get({
        plain: true
      })
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
    const productData = await Products.findAll({});

    const productList = productData.map((products) =>
      products.get({
        plain: true
      })
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


// GET all products in cart by order ID
router.get('/cart', async (req, res) => {
  try {
    const orderData = await Orders.findAll(
      {
        where: { user_id: req.session.user_id },
        include: [{ model: User }, { model: Products, through: Order_items }],
      });

    const orderList = orderData.map((orders) =>
      orders.get({ plain: true })
    );

    res.render('cart', {
      orderList,
      loggedIn: req.session.loggedIn,
    });

// add product to a order
router.post('/cart', async (req, res) => {
  try {
    console.log(req.body);
    let orderData = await Orders.findAll(
      {
        where: { user_id: req.body.user_id },
        // where: { user_id: req.session.user_id },
      }
      );
      // console.log("ORDER DATA ON LINE 140", orderData);
    if (orderData.length === 0 ) {
      // orderData = await Orders.create({
        let newOrderData = await Orders.create({
        user_id: req.body.user_id 
        // user_id: req.session.user_id
      })
      let orderItem = await Order_items.findOne({
        where: { orders_id: newOrderData.id },
      });
      if (!orderItem) orderItem = await Order_items.create({
        orders_id: newOrderData.id,
        products_id: req.body.products_id,
      })
      const updatedOrderItems = await Order_items.update({ quantity: orderItem.quantity + 1 }, {
        where: {
          user_id: req.body.user_id ,
          // user_id: req.session.user_id,
          orders_id: newOrderData.id,
        }
      })
      res.json(updatedOrderItems)
      return;
      // console.log("DID WE GET HERE???", newOrderData);
    }

    console.log("THIS IS ORDER DATA", orderData[0]);
    // res.json(orderData)
    let orderItem = await Order_items.findOne({
      where: { orders_id: orderData[0].id},
    });
    console.log("THIS IS", orderItem);
    // res.json(orderItem)
    if (!orderItem) orderItem = await Order_items.create({
      orders_id: orderData[0].id,
      products_id: req.body.products_id,
    })
    const updatedOrderItems = await Order_items.update({ quantity: orderItem.quantity + 1 }, {
      where: {
        // user_id: req.body.user_id ,
        // user_id: req.session.user_id,
        orders_id: orderData[0].id,
      }
    })
    res.json(updatedOrderItems)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a product by ID
router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Products.findByPk(req.params.id)

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
  }
module.exports = router;
