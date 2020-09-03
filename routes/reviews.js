var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.get('/', isLoggedIn, reviewsCtrl.index);
router.get('/nonprofits/:id/reviews/new', isLoggedIn, reviewsCtrl.new);
router.get('/:id', reviewsCtrl.show);
router.post('/nonprofits/:id/reviews', isLoggedIn, reviewsCtrl.create);
router.delete('/:id', isLoggedIn, reviewsCtrl.delete)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
module.exports = router;