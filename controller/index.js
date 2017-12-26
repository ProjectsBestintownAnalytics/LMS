const loginController = require("./loginController");
const jsonPatch = require("./jsonPatch");
const createThumbnail = require("./createThumbnail");
const adminController = require('./adminController')
module.exports = {
	loginController : loginController,
	jsonPatch:jsonPatch,
	createThumbnail:createThumbnail,
	adminController:adminController
};