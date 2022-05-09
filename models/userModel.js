const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    oauthProvider: {
        type: String,
        required: true
    },
    oathUid: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    placeId: {
        type: String,
        required: false
    },
    creationTime: {
        type: Date,
        required: true
    },
    updateTime: {
        type: Date,
        required: false
    },
});

const User = mongoose.model('users', UserSchema);
module.exports = User;
