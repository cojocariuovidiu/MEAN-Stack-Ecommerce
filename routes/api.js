const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.send("Api work");
});


/// User Api
const user = require('../controllers/user.controller');
router.post('/user', user.api);

/// Category Api 
const category = require('../controllers/category.controller');
router.get('/category', category.list);
router.delete('/category/:_id', category.delete);
router.post('/category', category.create);

/// Product Api 
const product = require('../controllers/product.controller');
router.get('/product', product.list);

module.exports = router;