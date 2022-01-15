const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
