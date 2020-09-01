var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);
router.get('/new', usersCtrl.new);
router.get('/:id', usersCtrl.show);
router.post('/', usersCtrl.create);
router.delete('/:id', usersCtrl.delete)

module.exports = router;