var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config');

var adminRoles = new Schema({
    roleName: {type: String, required:true},
    roleType: {type: String, required: true},
    isActive: {type: Boolean,default:true}
},
    {
    timestamps: true
});

module.exports = mongoose.model('adminroles', adminRoles);