const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    name: String,
    review: String,
    nonprofit: {
        type: Schema.Types.ObjectId,
        ref: 'Nonprofit'
    },
});

module.exports = mongoose.model('Review', ReviewSchema);