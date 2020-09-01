const Nonprofit = require('../models/nonprofit');
const Bdmember = require('../models/bdmember');

module.exports = {
    index,
    new: newNonprofit,
    create,
    delete: deleteNonprofit,
    show,
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
    console.log(req.params.id);
    Nonprofit.findById(req.params.id, function(err, nonprofit) {
        Bdmember.find({nonprofit: nonprofit._id}, function(err, bdmembers) {
            res.render('nonprofits/show', {bdmembers, nonprofit, title: 'Nonprofit Details'});
        })
    })
}