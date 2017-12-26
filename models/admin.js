var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config');

var admin = new Schema({
    email: {type: String, unique: true, sparse: true},
    fullName: {type: String},
    phoneNumber: {type: String, required: true, index: true},
    password: {type: String, required: true},
    accessToken: {type: String, select: false},
    userType: {type: String, enum: [Config.APP_CONSTANTS.DATABASE.USER_ROLES.ADMIN]},
    createdAt: {type: Date},
    isBlocked: {type: Boolean, default: false, required: true}
});

module.exports = mongoose.model('admin', admin);