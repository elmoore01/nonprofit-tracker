const Bdmember = require('../models/bdmember');
const nonprofit = require('../models/nonprofit');
const nonprofits = require('./nonprofits');

module.exports = {
    index,
    new: newBdmember,
    create,
    delete: deleteBdmember,
    show,
    update,
    edit,
}

function index(req, res) {
    Bdmember.find({}, function(err, bdmembers) {
        res.render('bdmembers/index', { bdmembers, title: 'All Board Members' });
    });
}

function create(req, res) {
    req.body.nonprofit=req.params.id;
    const nonprofitId = req.params.id;
    // const bdmember = new Bdmember(req.body);
    Bdmember.create(req.body, function(err, bdmember) {
        res.redirect(`/nonprofits/${nonprofitId}`);
    })
    // console.log(req.body);
    // bdmember.save(function(err) {
    //     console.log(err)
    //     if (err) return res.redirect('/bdmembers/new')
}

function newBdmember(req, res) {
    nonprofit.findById(req.params.id, function(err, nonprofit) {
        res.render('bdmembers/new', { title: 'Add Member', nonprofit });
    })
}

function show(req, res) {
    console.log(req.params.id);
    Bdmember.findById(req.params.id, function(err, bdmember) {
        res.render('bdmembers/show', {bdmember, title: 'Member Details'});
    })
}

function deleteBdmember(req, res) {
    Bdmember.findByIdAndDelete(req.params.id, function (err, bdmember) {
        console.log("bdmember nonprofit", bdmember);
        res.redirect(`/nonprofits/${bdmember.nonprofit}`)
      });
}

function update(req, res) {
    Bdmember.findByIdAndUpdate(req.params.id, 
        {   name: req.body.name,
            title: req.body.title,
            company: req.body.company,
        }, function (err, bdmember) {
        res.redirect(`/nonprofits/${bdmember.nonprofit}`)
    });
}

function edit(req, res) {
    Bdmember.findById(req.params.id, function(err, bdmember) {
        console.log(bdmember);
        res.render('bdmembers/edit', {bdmember, title: "update member"})
    })
}