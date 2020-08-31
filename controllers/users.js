const User = require('../models/user');

module.exports = {
    index,
    new: newUser
}

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users/index', { users, title: 'All Users' });
    });
}
function newUser(req, res) {
    res.render('users/new', { title: 'Add User' });
}