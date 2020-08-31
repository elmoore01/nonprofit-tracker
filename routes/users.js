var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.post('/new', usersCtrl.new);

module.exports = router;