var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config');
const userType = Config.APP_CONSTANTS.DATABASE.USER_ROLES
var users = new Schema({
    email: {type: String, unique: true, sparse: true},
    fullName: {type: String},
    phoneNumber: {type: String, required: true, index: true},
    password: {type: String, required: true},
    accessToken: {type: String, select: false},
    userType: {type: String, enum: [
            userType.CORPORATE,
            userType.STUDENT
        ]},
    isActive:{type: Boolean,default:true},
    isBlocked: {type: Boolean, default: false}
});
module.exports = mongoose.model('users', users);