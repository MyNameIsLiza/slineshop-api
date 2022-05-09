const User = require('../models/userModel');
const {ObjectId} = require("mongodb");
const {sendError, sendResult, getUserById, getAllUsers} = require('./baseController');

module.exports = {
    addUser: async (req, res) => {
        console.log("addUser");
        try {
            const user = new User(req.body);
            console.log(user);
            await user.save();
            sendResult(res, 'Success',
                {
                    "id": user._id,
                    "oauthProvider": user.oauthProvider,
                    "oathUid": user.oathUid,
                    "firstName": user.firstName,
                    "lastName": user.lastName,
                    "email": user.email,
                    "picture": user.picture,
                    "placeId": user.placeId,
                    "creationTime": user.creationTime,
                    "updateTime": user.updateTime,
                });
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    getUsers: async (req, res) => {
        console.log("getUsers");
        try {
            const users = await getAllUsers();
            console.log(users);
            if (users.length) {
                sendResult(res, 'Success', users.map((user) => {
                    return {
                        "id": user._id,
                        "userId": user.userId,
                        "user": user.user,
                    }
                }));
            } else {
                sendError(res, 400, 'Users are missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    getUser: async (req, res) => {
        console.log("getUser");
        try {
            const user = await getUserById(req.params.id);
            if (user) {
                sendResult(res, 'Success', {
                    "id": user._id,
                    "userId": user.userId,
                    "user": user.user,
                });
            } else {
                sendError(res, 400, 'User is missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
    deleteUser: async (req, res) => {
        console.log("deleteUser");
        try {
            const user = await getUserById(req.params.id);
            if (user) {
                await User.deleteOne(user);
                sendResult(res, 'Success', {
                    "id": user._id,
                    "userId": user.userId,
                    "user": user.user,
                });
            } else {
                sendError(res, 400, 'User is missing')
            }
        } catch (error) {
            sendError(res, 400, 'Bad request')
        }
    },
}
