const router = require('express').Router();
const { User, Products, Orders, Order_items, CollectionProduct, Collections } = require('../models');


// render homepage
router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

// GET a user for profile
router.get('/profile', async (req, res) => {

  try {
    const userData = await User.findOne(
      {
        where: { id: req.session.user_id },
      });
    const collectionData = await CollectionProduct.findOne(
      {
        where: { id: req.session.user_id },
      });
    const userProfile = userData.get({ plain: true });

    const currentCollectionData = await Collections.findOne({
      where: {
        // id: collectionData.collections_id,
        id:  req.session.user_id, 
      },
      include: [{ model: Products, through: CollectionProduct }],
    })
    const currentCollection = currentCollectionData.get({ plain: true });


    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }
      console.log("#1", currentCollection);
      res.render('profile', {
        userProfile,
        currentCollection,
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
    const userData = await User.findOne(
      {
        where: { id: req.params.id },
      });
    const collectionData = await CollectionProduct.findOne(
      {
        where: { id: req.params.id },
      });
    const userProfile = userData.get({ plain: true });

    const currentCollectionData = await Collections.findOne({
      where: {
        id:  req.params.id, 
      },
      include: [{ model: Products, through: CollectionProduct }],
    })
    const currentCollection = currentCollectionData.get({ plain: true });


    req.session.save(() => {
      if (req.session.countVisit) {
        req.session.countVisit++;
      } else {
        req.session.countVisit = 1;
      }
      console.log("#1", currentCollection);
      res.render('profile', {
        userProfile,
        currentCollection,
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
      user_id: req.session.user_id
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
      user_id: req.session.user_id,
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
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// add product to cart
router.post('/cart', async (req, res) => {
  try {
    let orderData = await Orders.findOne(
      {
        where: { user_id: req.session.user_id },
      }
    );
    let orderItem = await Order_items.findOne({
      where: {
        orders_id: orderData.id,
        products_id: req.body.products_id,
      },
    });
    if (!orderItem) orderItem = await Order_items.create({
      orders_id: orderData.id,
      products_id: req.body.products_id,
    });

    res.json(orderItem)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//delete a product from cart
router.delete('/cart', async (req, res) => {
  try {
    const productData = await Order_items.destroy({
      where: {
        products_id: req.body.products_id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'This item does not exist!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
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