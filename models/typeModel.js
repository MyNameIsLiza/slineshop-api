const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    groupId: {
        type: String,
        required: true
    }
});

const Type = mongoose.model('types', TypeSchema);
module.exports = Type;
