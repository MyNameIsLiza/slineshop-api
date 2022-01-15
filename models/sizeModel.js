const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SizeSchema = new Schema({
    sizeId: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
});

const Size = mongoose.model('sizes', SizeSchema);
module.exports = Size;
