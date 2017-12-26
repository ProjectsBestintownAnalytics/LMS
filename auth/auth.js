/*
    ***************************************
    *
    *       AUTHORIZATION UTILS
    *
    ***************************************
*/


const Config = require("../config");
const Jwt = require("jsonwebtoken");

let setToken = function (tokenData, callback){
	if (!(tokenData.username && tokenData.password)) {
		callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_GENERATION_ERROR);
	} else {
		// Token Expiration time from the Config File
		const expToken  = Config.APP_CONSTANTS.SERVER.TOKEN_EXPIRATION_IN_SECONDS; 
		// options for token like expiration,issuer,subject
		const options = {
			expiresIn:expToken
		};
		Jwt.sign(tokenData, Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY,options,(err,token)=>{
			if(err){
				callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_GENERATION_ERROR);
			} else{
				callback(null,token);    
			}
		});
	}
};




let verifyToken = (token, callback) =>{
	// @token - token for verification 
	Jwt.verify(token, Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY, (err, decoded) =>{
		if (err) {
			callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.TOKEN_SIGN_ERROR);
		} else {
			callback(null,decoded);
		}
	});
};


module.exports = {
	setToken: setToken,
	verifyToken: verifyToken
};