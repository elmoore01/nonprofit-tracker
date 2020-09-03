var express = require('express');
var router = express.Router();
var nonprofitsCtrl =require('../controllers/nonprofits');

router.get('/', nonprofitsCtrl.index);
router.get('/new', isLoggedIn, nonprofitsCtrl.new);
router.get('/:id', nonprofitsCtrl.show);
router.post('/', isLoggedIn, nonprofitsCtrl.create);
router.delete('/:id', isLoggedIn, nonprofitsCtrl.delete)


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
