const Size = require('../models/sizeModel');
const {ObjectId} = require("mongodb");
const {sendError, sendResult, getSizeById, getAllSizes} = require('./baseController');

module.exports = {
    addSize: async (req, res) => {
        console.log("addSize");
        try {
            const size = new Size(req.body);
            console.log(size);
            await size.save();
            sendResult(res, 'Success',
                {
                    "id": size._id,
                    "sizeId": size.sizeId,
                    "size": size.size,
                });
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    getSizes: async (req, res) => {
        console.log("getSizes");
        try {
            const sizes = await getAllSizes();
            console.log(sizes);
            if (sizes.length) {
                sendResult(res, 'Success', sizes.map((size) => {
                    return {
                        "id": size._id,
                        "sizeId": size.sizeId,
                        "size": size.size,
                    }
                }));
            } else {
                sendError(res, 400, 'Sizes are missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    getSize: async (req, res) => {
        console.log("getSize");
        try {
            const size = await getSizeById(req.params.id);
            if (size) {
                sendResult(res, 'Success', {
                    "id": size._id,
                    "sizeId": size.sizeId,
                    "size": size.size,
                });
            } else {
                sendError(res, 400, 'Size is missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    deleteSize: async (req, res) => {
        console.log("deleteSize");
        try {
            const size = await getSizeById(req.params.id);
            if (size) {
                await Size.deleteOne(size);
                sendResult(res, 'Success', {
                    "id": size._id,
                    "sizeId": size.sizeId,
                    "size": size.size,
                });
            } else {
                sendError(res, 400, 'Size is missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
}
