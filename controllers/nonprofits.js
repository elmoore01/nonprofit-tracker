const Nonprofit = require('../models/nonprofit');
const Bdmember = require('../models/bdmember');
const Review = require('../models/review');

module.exports = {
    index,
    new: newNonprofit,
    create,
    delete: deleteNonprofit,
    show,
    update,
    edit,
};

function index(req, res) {
    const user = "hello"
    Nonprofit.find({}, function(err, nonprofits) {
        res.render('nonprofits/index', { nonprofits, user,  title: 'All Nonprofits' });
    });
}

function create(req, res) {
    if (!req.body.nonprofits) delete req.body.nonprofits;
    const nonprofit = new Nonprofit(req.body);
    nonprofit.save(function(err) {
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
    Nonprofit.findById(req.params.id, function(err, nonprofit) {
        Bdmember.find({nonprofit: nonprofit._id}, function(err, bdmembers) {
            Review.find({nonprofit: nonprofit._id}, function(err, reviews) {
            res.render('nonprofits/show', {bdmembers, reviews, nonprofit, user: req.user, title: 'Nonprofit Details'});
            })
        })
    })
}

function update(req, res) {
    Nonprofit.findByIdAndUpdate(req.params.id, function(err) {
        res.redirect('/nonprofits');
    });
}

function update(req, res) {
    Nonprofit.findByIdAndUpdate(req.params.id, 
        {   logo: req.body.logo,
            name: req.body.name,
            contact: req.body.contact,
            title: req.body.title,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            location: req.body.location,
            zip: req.body.zip,
            phone: req.body.phone,
            category: req.body.category,
            website: req.body.website,
            guidestar: req.body.guidestar,
            missionStatement: req.body.missionStatement,
            aboutUs: req.body.aboutUs,
            video: req.body.video,
            reviews: req.body.reviews,
        }, function (err, bdmember) {
        res.redirect(`/nonprofits/${nonprofit.nonprofit}`)
    });
}
function edit(req, res) {
    Nonprofit.findById(req.params.id, function(err, nonprofit) {
        res.render('nonprofits/edit', {nonprofit, title: "update nonprofit"})
    })
}