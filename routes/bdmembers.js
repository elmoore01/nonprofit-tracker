var express = require('express');
var router = express.Router();
var bdmembersCtrl = require('../controllers/bdmembers');

router.get('/', bdmembersCtrl.index);
router.get('/nonprofits/:id/bdmembers/new', bdmembersCtrl.new);
router.get('/:id', bdmembersCtrl.show);
router.post('/nonprofits/:id/bdmembers', bdmembersCtrl.create);
router.delete('/:id', bdmembersCtrl.delete);
router.put('/:id', bdmembersCtrl.update);
router.get('/:id/edit', bdmembersCtrl.edit);



module.exports = router;