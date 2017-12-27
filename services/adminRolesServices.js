'use strict';

var Models = require('../models');


var updateAdminRoles = function (criteria, dataToSet, options, callback) {
    options.lean = true;
    options.new = true;
    Models.AdminRoles.findOneAndUpdate(criteria, dataToSet, options, callback);
};
//Insert User in DB
var createAdminRoles = function (objToSave, callback) {
    new Models.AdminRoles(objToSave).save(callback)
};
//Delete User in DB
var deleteAdminRoles = function (criteria, callback) {
    Models.AdminRoles.findOneAndRemove(criteria, callback);
};

//Get Users from DB
var getAdminRoles = function (criteria, projection, options, callback) {
    options.lean = true;
    Models.AdminRoles.find(criteria, projection, options, callback);
};
module.exports = {
    updateAdminRoles: updateAdminRoles,
    createAdminRoles: createAdminRoles,
    deleteAdminRoles: deleteAdminRoles,
    getAdminRoles: getAdminRoles
};