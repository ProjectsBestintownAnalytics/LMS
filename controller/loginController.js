/*
	***************************************************************************************************
	*
	*		Controller for Login Functionality for providing JWT.
	*
	***************************************************************************************************
*/

const auth = require("../auth/auth");

let signToken = (req,callback) =>{
	// @ Call the auth function with username and password as params in the request body.
	auth.setToken(req.body,(err,data)=> {
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
};

let verifyToken = (token,callback) => {
	// @ Verification of token for correctness.
	auth.verifyToken(token,(err,data)=> {
		if(err){
			callback(err);
		} else{
			callback(null,data);
		}

	});
};


module.exports = {
	signToken : signToken,
	verifyToken:verifyToken
};