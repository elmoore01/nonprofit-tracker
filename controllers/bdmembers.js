const Bdmember = require('../models/bdmember');
const nonprofit = require('../models/nonprofit');

module.exports = {
    index,
    new: newBdmember,
    create,
    delete: deleteBdmember,
    show,
}

function index(req, res) {
    Bdmember.find({}, function(err, bdmembers) {
        res.render('bdmembers/index', { bdmembers, title: 'All Board Members' });
    });
}

function create(req, res) {
    req.body.nonprofit=req.params.id;
    const nonprofitId = req.params.id;
    const bdmember = new Bdmember(req.body);
    console.log(req.body);
    bdmember.save(function(err) {
        console.log(err)
        if (err) return res.redirect('/bdmembers/new')
        res.redirect(`/nonprofits/${nonprofitId}`);
    });
}

function newBdmember(req, res) {
    nonprofit.findById(req.params.id, function (err, nonprofit) {
        res.render('bdmembers/new', { title: 'Add Member', nonprofit });
    })
}


function deleteBdmember(req, res) {
    Bdmember.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/bdmembers');
    });
}

function show(req, res) {
    console.log(req.params.id);
    Bdmember.findById(req.params.id, function(err, bdmember) {
        res.render('bdmembers/show', {bdmember, title: 'Member Details'});
    })
}