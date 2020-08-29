var express = require('express');
var router = express.Router();
var nonprofitCtrl =require('..controllers/nonprofits');

router.get('/', nonprofitCtrl.index);
router.get('/new', nonprofitCtrl.new);
router.get('/:id', nonprofitCtrl.show);
router.get('/', nonprofitCtrl.create);
router.get('/:id', nonprofitCtrl.delete);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
