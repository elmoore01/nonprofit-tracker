const Review = require('../models/review');

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
    if (!req.body.reviews) delete req.body.reviews;
    const review = new Review(req.body);
    console.log(req.body);
    review.save(function(err) {
        console.log(err)
        if (err) return res.redirect('/reviews/new')
        res.redirect('/reviews');
    });
}

function newReview(req, res) {
    res.render('reviews/new', { title: 'Add Review' });
}

function deleteReview(req, res) {
    Review.findByIdAndDelete(req.params.id, function(err) {
        res.redirect('/reviews');
    });
}

function show(req, res) {
    console.log(req.params.id);
    Review.findById(req.params.id, function(err, review) {
        res.render('reviews/show', {review, title: 'Review Details'});
    })
}