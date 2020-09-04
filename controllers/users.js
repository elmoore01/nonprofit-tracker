const User = require('../models/user');

module.exports = {
    index,
    new: newUser,
    create,
    delete: deleteUser,
    show,
    isLoggedIn,
    addReview,
}

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users/index', { users, title: 'All Users' });
    });
}

function create(req, res) {
    if (!req.body.users) delete req.body.users;
    const user = new User(req.body);
    user.save(function(err) {
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
    User.findById(req.params.id, function(err, user) {
        res.render('users/show', {user, title: 'User Details'});
    })
}

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

function addReview(req, res, next) {
    req.user.reviews.push(req.body);
    req.user.save(function(err) {
      res.redirect('/users');
    });
  }