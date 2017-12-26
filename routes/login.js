const Express = require("express");
const router = Express.Router();
const Controller = require("../controller");


//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
	next();
});


/* Public Endpoint for login 
	* @param - username and password
	* @request - POST
	* @task - Create the token by passing req to signToken in loginControlloer
	* @response - Token (e.g. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiaWF0IjoxNTEzNTg3NDk1fQ.q-R3KvDorMBMnsQzD9tX0TTVIGqrCenfegivt9eQLZk)
				- Token is of type string 
	* @Error - Error is called from Config File  
			 - Error {
				    "statusCode": 400,
				    "customMessage": "Sorry!! Not able to generate token as username or password is invalid.",
				    "type": " TOKEN_GENERATION_ERROR"
				}
*/
router.post("/login",(req, res)=>{
	Controller.loginController.signToken(req,(err,data) =>{
		if(err){
			res.status(err.statusCode).send(err);
		}
		res.send(data);
	});
});


/* Public Endpoint for verifyToken 
	* @param - token
	* @request - get
	* @task - Verify the Token and respond the data
	* @response - 	{
					    "username": "test",
					    "password": "password",
					    "iat": 1513587495, // issue time
					    "exp": 1513591131 // expiration time
					}
				- Token is of type Object
	* @Error - Error is called from Config File  
			 - Error {
					    "statusCode": 401,
					    "customMessage": "Token Passed is Invalid",
					    "type": " TOKEN_SIGN_ERROR"
					 }
*/
router.get("/verifyToken",(req, res)=>{
	Controller.loginController.verifyToken(req.query.token,(err,data) => {
		if(err){
			res.send(err);
		}
		res.send(data);
	});
});



module.exports = router;