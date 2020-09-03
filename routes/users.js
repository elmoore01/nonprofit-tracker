var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.post('/reviews', isLoggedIn, usersCtrl.addReview);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  
module.exports = router;