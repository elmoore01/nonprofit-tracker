const User = require('../models/user');

module.exports = {
    index,
    new: newUser,
    create,
    delete: deleteUser,
    show,
}

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users/index', { users, title: 'All Users' });
    });
}

function create(req, res) {
    if (!req.body.users) delete req.body.users;
    const user = new User(req.body);
    console.log(req.body);
    user.save(function(err) {
        console.log(err)
        if (err) return res.redirect('/users/new')
        res.redirect('/users');
    });
}

function newUser(req, res) {
    res.render('users/new', { title: 'Add User' });
}


function deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/users');
    });
}

function show(req, res) {
    console.log(req.params.id);
    User.findById(req.params.id, function(err, user) {
        res.render('users/show', {user, title: 'User Details'});
    })
}