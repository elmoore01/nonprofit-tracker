const Nonprofit = require('../models/nonprofit');

module.exports = {
    index,
    new: newNonprofit,
    // delete: deleteNonprofit,
    // show 
};

function index(req, res) {
    Nonprofit.find({}, function(err, nonprofits) {
        res.render('nonprofits/index', { nonprofits, title: 'All Nonprofits' });
    });
}

function newNonprofit(req, res) {
    res.render('nonprofits/new', { title: 'Add Nonprofit' });
}

// function deleteNonprofit(req, res) {
//     Nonprofit.findByIdAndDelete(req.params.id, function(err) {
//         res.redirect('/nonprofits');
//     });
// }

// function show(req, res) {
//     console.log(req.params.id);
//     Nonprofit.findById(req.params.id, function(err, nonprofit) {
//         res.render('nonprofits/show', {nonprofit, title: 'Nonprofit Details'});
//     })
// }