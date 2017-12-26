/*
	***************************************************************************************************
	*
	*		This will create the route so that it can be accessible through POST or GET
	*
	***************************************************************************************************
*/


const Express = require("express");
const router = Express.Router();
const Config = require("../config");
const Controller = require("../controller");

/* Private Endpoint for JSON-PATCH 
	* @authorization - Token Generated from login API
	* @param - Object
			 -  {
					"json_payload":{
						"test":"test"
					},
					"json_patch": [{"op": "replace", "path": "/test", "value": "bar"},{"op": "add", "path": "/new", "value": "bar"}]
				}				
	* @request - POST
	* @task - Output the json as per json_patch method
	* @response -   {
						"test": "bar",
						"new": "bar"
					}
				- Token is of type Object
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
router.post("/jsonPatch", function(req, res) {
	let authHeader = req.headers.authorization;
	if(!authHeader){
		res.status(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_NOT_PASSED.statusCode).send(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_NOT_PASSED);
	} else{
		Controller.loginController.verifyToken(authHeader, (err,data) => {
			if(err){
				res.status(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_SIGN_ERROR.statusCode).send(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_SIGN_ERROR);
			} else{
				Controller.jsonPatch.jsonpatcher(req.body, (err,data) => {
					if(err){
						res.status(500).send(err);
					} else{
						res.send(data);
					}
				});
			}
		});
	}	
});



module.exports = router;