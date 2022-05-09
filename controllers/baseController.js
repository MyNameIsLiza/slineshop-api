const Currency = require('../models/currencyModel');
const Size = require('../models/sizeModel');
const Place = require('../models/placeModel');
const {ObjectId} = require("mongodb");

module.exports = {
    sendError(res, status, message) {
        res.status(status).send({
            message: message
        });
    },

    sendResult(res, message, result) {
        res.send({
            message: message,
            result: Array.isArray(result)?[...result]:result
        });
    },

    async getCurrencyById(id) {
        const currency = await Currency.findOne({_id: new ObjectId(id)},'-__v');
        return currency ?? false;
    },

    async getSizeById(id) {
        const size = await Size.findOne({_id: new ObjectId(id)},'-__v');
        return size ?? false;
    },

    async getPlaceById(id) {
        const place = await Place.findOne({_id: new ObjectId(id)},'-__v');
        return place ?? false;
    },

    async getAllCurrencies() {
        const currencies = await Currency.find({},'-__v');
        return currencies ?? false;
    },

    async getAllSizes() {
        const sizes = await Size.find({},'-__v');
        return sizes ?? false;
    },

    async getAllPlaces() {
        const places = await Place.find({},'-__v');
        return places ?? false;
    },
}
