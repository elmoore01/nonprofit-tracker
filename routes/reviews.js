var express = require('express');
var router = express.Router();
var reviewsCtrl =require('../controllers/reviews');

router.get('/', reviewsCtrl.index);
router.get('/new', reviewsCtrl.new);
router.get('/:id', reviewsCtrl.show);
router.post('/', reviewsCtrl.create);
router.delete('/:id', reviewsCtrl.delete)

module.exports = router;
