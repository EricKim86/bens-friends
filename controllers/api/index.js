const router = require('express').Router();

const userRoutes = require('./user-routes');
const checkoutRoutes = require('./checkout');

router.use('/users', userRoutes);
router.use('/cart', checkoutRoutes);

module.exports = router;