const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.send("Api work");
});


/// User Api
const user = require('../controllers/user.controller');
router.post('/user', user.api);

module.exports = router;