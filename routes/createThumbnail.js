/*
	***************************************************************************************************
	*
	*		This will create the route so that it can be accessible through POST or GET
	*
	***************************************************************************************************
*/


const Express = require("express");
const router = Express.Router();
const Controller = require("../controller");
const Config = require("../config");


/* Private Endpoint for JSON-PATCH 
	* @authorization - Token Generated from login API
	* @param - url 			
	* @request - POST
	* @task - Output the image in the browser
	* @response -  Stream
	* @Error - Error is called from Config File  
			 - Errors are multiple 
			 - Error {
					"statusCode": 401,
					"customMessage": "Token Passed is Invalid",
					"type": " TOKEN_SIGN_ERROR"
				} // If token passed is invalid
			 - Error {
						"statusCode": 401,
						"customMessage": "Token is not passed.",
						"type": " TOKEN_NOT_PASSED"
					} //if token is not passed

*/
router.get("/createThumbnail", (req, res) => {
	let authHeader = req.headers.authorization;
	if(!authHeader){
		res.status(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_NOT_PASSED.statusCode).send(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_NOT_PASSED);
	} else{
		Controller.loginController.verifyToken(authHeader, (err,data) => {
			if(err){
				res.status(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_SIGN_ERROR.statusCode).send(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_SIGN_ERROR);
			} else{
				Controller.createThumbnail.createThumbnail(req.query.url,function(err,data) {
					if(err){
						res.status(500).send(Config.APP_CONSTANTS.STATUS_MSG.ERROR.IMAGE_UPLOAD_ERROR);
					} else{
						res.writeHead(200, {"Content-Type": "image/jpeg"});
						res.end(data); // Send the file data to the browser.
					}
				});
			}
		});
	}
});



module.exports = router;