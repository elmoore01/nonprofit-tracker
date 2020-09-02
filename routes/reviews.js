var express = require('express');
var router = express.Router();
var reviewsCtrl =require('../controllers/reviews');

router.get('/', reviewsCtrl.index);
router.get('/nonprofits/:id/reviews/new', reviewsCtrl.new);
router.get('/:id', reviewsCtrl.show);
router.post('/nonprofits/:id/reviews', reviewsCtrl.create);
router.delete('/:id', reviewsCtrl.delete)

module.exports = router;