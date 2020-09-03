var express = require('express');
var router = express.Router();
var bdmembersCtrl = require('../controllers/bdmembers');

router.get('/', bdmembersCtrl.index);
router.get('/nonprofits/:id/bdmembers/new', isLoggedIn, bdmembersCtrl.new);
router.get('/:id', bdmembersCtrl.show);
router.post('/nonprofits/:id/bdmembers', isLoggedIn, bdmembersCtrl.create);
router.delete('/:id', isLoggedIn, bdmembersCtrl.delete);
router.put('/:id', isLoggedIn, bdmembersCtrl.update);
router.get('/:id/edit', isLoggedIn, bdmembersCtrl.edit);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;