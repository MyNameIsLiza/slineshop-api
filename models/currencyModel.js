const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CurrencySchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

const Currency = mongoose.model('currency', CurrencySchema);
module.exports = Currency;
