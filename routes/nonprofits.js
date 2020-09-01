var express = require('express');
var router = express.Router();
var nonprofitsCtrl =require('../controllers/nonprofits');

router.get('/', nonprofitsCtrl.index);
router.get('/new', nonprofitsCtrl.new);
router.get('/:id', nonprofitsCtrl.show);
router.post('/', nonprofitsCtrl.create);
router.delete('/:id', nonprofitsCtrl.delete)

module.exports = router;
