const Place = require('../models/placeModel');
const {ObjectId} = require("mongodb");
const {sendError, sendResult, getPlaceById, getAllPlaces} = require('./baseController');

module.exports = {
    addPlace: async (req, res) => {
        console.log("addPlace");
        try {
            const place = new Place(req.body);
            console.log(place);
            await place.save();
            sendResult(res, 'Success',
                {
                    "id": place._id,
                    "name": place.name,
                    "userId": place.userId,
                });
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    getPlaces: async (req, res) => {
        console.log("getPlaces");
        try {
            const places = await getAllPlaces();
            console.log(places);
            if (places.length) {
                sendResult(res, 'Success', places.map((place) => {
                    return {
                        "id": place._id,
                        "name": place.name,
                        "userId": place.userId,
                    }
                }));
            } else {
                sendError(res, 400, 'Places are missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    getPlace: async (req, res) => {
        console.log("getPlace");
        try {
            const place = await getPlaceById(req.params.id);
            if (place) {
                sendResult(res, 'Success', {
                    "id": place._id,
                    "name": place.name,
                    "userId": place.userId,
                });
            } else {
                sendError(res, 400, 'Place is missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    deletePlace: async (req, res) => {
        console.log("deletePlace");
        try {
            const place = await getPlaceById(req.params.id);
            if (place) {
                await Place.deleteOne(place);
                sendResult(res, 'Success', {
                    "id": place._id,
                    "name": place.name,
                    "userId": place.userId,
                });
            } else {
                sendError(res, 400, 'Place is missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
}
