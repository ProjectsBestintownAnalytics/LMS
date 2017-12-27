'use strict';

var Models = require('../models');


var updateUser = function (criteria, dataToSet, options, callback) {
    options.lean = true;
    options.new = true;
    Models.User.findOneAndUpdate(criteria, dataToSet, options, callback);
};
//Insert User in DB
var createUser = function (objToSave, callback) {
    new Models.User(objToSave).save(callback)
};
//Delete User in DB
var deleteUser = function (criteria, callback) {
    Models.User.findOneAndRemove(criteria, callback);
};

//Get Users from DB
var getUser = function (criteria, projection, options, callback) {
    options.lean = true;
    Models.User.find(criteria, projection, options, callback);
};
module.exports = {
    updateUser: updateUser,
    createUser: createUser,
    deleteUser: deleteUser,
    getUser: getUser
};