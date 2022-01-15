const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
});

const Group = mongoose.model('groups', GroupSchema);
module.exports = Group;
