const Nonprofit = require('../models/nonprofit');
const Bdmember = require('../models/bdmember');
const Review = require('../models/review');

module.exports = {
    index,
    new: newNonprofit,
    create,
    delete: deleteNonprofit,
    show,
    update: updateNonprofit,
};

function index(req, res) {
    Nonprofit.find({}, function(err, nonprofits) {
        res.render('nonprofits/index', { nonprofits, title: 'All Nonprofits' });
    });
}

function create(req, res) {
    if (!req.body.nonprofits) delete req.body.nonprofits;
    const nonprofit = new Nonprofit(req.body);
    console.log(req.body);
    nonprofit.save(function(err) {
        console.log(err)
        if (err) return res.redirect('/nonprofits/new')
        res.redirect('/nonprofits');
    });
}

function newNonprofit(req, res) {
    res.render('nonprofits/new', { title: 'Add Nonprofit' });
}

function deleteNonprofit(req, res) {
    Nonprofit.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/nonprofits');
    });
}

function show(req, res) {
    console.log(req.user);
    Nonprofit.findById(req.params.id, function(err, nonprofit) {
        Bdmember.find({nonprofit: nonprofit._id}, function(err, bdmembers) {
            Review.find({nonprofit: nonprofit._id}, function(err, reviews) {
            res.render('nonprofits/show', {bdmembers, reviews, nonprofit, user: req.user, title: 'Nonprofit Details'});
            })
        })
    })
}

function updateNonprofit(req, res) {
    Nonprofit.findByIdAndUpdate(req.params.id, function(err) {
        res.redirect('/nonprofits');
    });
}