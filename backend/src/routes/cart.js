const express = require('express');
const { addItemToCart } = require('../controllers/cart');
const { requireSignin, userMiddleware } = require('../common-middleware');
const router = express.Router();


router.post('/user/cart/add-to-cart', requireSignin, userMiddleware, addItemToCart);
// router.get('/category/getCategory', getCategories);

module.exports = router;