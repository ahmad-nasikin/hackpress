var express = require('express');
var router = express.Router();
var user = require('../controllers/userController')

/* GET users listing. */
router.post('/signup', user.signup);
router.post('/signin', user.signin);
router.get('/', user.getAllUser)

module.exports = router;
