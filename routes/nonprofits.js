var express = require('express');
var router = express.Router();
var nonprofitsCtrl =require('../controllers/nonprofits');

router.get('/', nonprofitsCtrl.index);
router.get('/new', nonprofitsCtrl.new);


module.exports = router;
