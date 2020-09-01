const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: String,
    nonprofit: String,
    review: String,
});

module.exports = mongoose.model('Review', ReviewSchema);