const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorageSchema = new Schema({
    placeId: {
        type: String,
        required: true
    },
    groupId: {
        type: String,
        required: true
    },
    typeId: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    currencyId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
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

const Storage = mongoose.model('storage', StorageSchema);
module.exports = Storage;
