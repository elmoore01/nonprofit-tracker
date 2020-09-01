const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BdmemberSchema = new Schema({
    name: String,
    title: String,
    company: String,
    nonprofit: [{
        type: Schema.Types.ObjectId,
        ref: 'Nonprofit'
    }],
});

module.exports = mongoose.model('Bdmember', BdmemberSchema);