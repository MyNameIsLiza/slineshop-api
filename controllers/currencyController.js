const Currency = require('../models/currencyModel');
const {ObjectId} = require("mongodb");
const {sendError, sendResult, getCurrencyById, getAllCurrencies} = require('./baseController');

module.exports = {
    addCurrency: async (req, res) => {
        console.log("addCurrency");
        try {
            const currency = new Currency(req.body);
            console.log(currency);
            await currency.save();
            sendResult(res, 'Success',
                {
                    "id": currency._id,
                    "name": currency.name,
                });
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    getCurrencies: async (req, res) => {
        console.log("getCurrencies");
        try {
            const currencies = await getAllCurrencies();
            console.log(currencies);
            if (currencies.length) {
                sendResult(res, 'Success', currencies.map((currency) => {
                    return {
                        "id": currency._id,
                        "name": currency.name,
                    }
                }));
            } else {
                sendError(res, 400, 'Currencies are missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    getCurrency: async (req, res) => {
        console.log("getCurrency");
        try {
            const currency = await getCurrencyById(req.params.id);
            if (currency) {
                sendResult(res, 'Success', {
                    "id": currency._id,
                    "name": currency.name,
                });
            } else {
                sendError(res, 400, 'Currency is missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    deleteCurrency: async (req, res) => {
        console.log("deleteCurrency");
        try {
            const currency = await getCurrencyById(req.params.id);
            if (currency) {
                await Currency.deleteOne(currency);
                sendResult(res, 'Success', {
                    "id": currency._id,
                    "name": currency.name,
                });
            } else {
                sendError(res, 400, 'Currency is missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
}
