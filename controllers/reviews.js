const Review = require('../models/review');
const nonprofit = require('../models/nonprofit');

module.exports = {
    index,
    new: newReview,
    create,
    delete: deleteReview,
    show,
};

function index(req, res) {
    Review.find({}, function(err, reviews) {
        res.render('reviews/index', { reviews, title: 'All Reviews' });
    });
}

function create(req, res) {
    req.body.nonprofit=req.params.id;
    const nonprofitId = req.params.id;
    const review = new Review(req.body);
    console.log(req.body);
    review.save(function(err) {
        console.log(err)
        if (err) return res.redirect('/reviews/new')
        res.redirect(`/nonprofits/${nonprofitId}`);
    });
}

function newReview(req, res) {
    nonprofit.findById(req.params.id, function(err, nonprofit) {
        res.render('reviews/new', { title: 'Add Review', nonprofit });
    })
}

function deleteReview(req, res) {
    Review.findByIdAndDelete(req.params.id, function (err, review) {
        console.log("review nonprofit", review);
        res.redirect(`/nonprofits/${review.nonprofit}`)
      });
}
function show(req, res) {
    console.log(req.params.id);
    Review.findById(req.params.id, function(err, review) {
        res.render('reviews/show', {review, title: 'Review Details'});
    })
}