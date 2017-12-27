/*
	***************************************************************************************************
	*
	*       APP CONSTANTS used for STATIC MESSAGES for ERROR, SUCCESS and other constants.
	*
	***************************************************************************************************
*/

const SERVER = {
	PORT:3000, // PORT CONFIGURATION
	TOKEN_EXPIRATION_IN_SECONDS: 600000, // TOKEN EXPIRATION TIME
	JWT_SECRET_KEY: "5231749e6aa6f334fc343fadd323429fc91567d255f5426d9ff54", // JWT Token
	
};

const swaggerDefaultResponseMessages = [
	{code: 200, message: "OK"},
	{code: 400, message: "Bad Request"},
	{code: 401, message: "Unauthorized"},
	{code: 404, message: "Data Not Found"},
	{code: 500, message: "Internal Server Error"}
];

const DATABASE = {
    USER_ROLES: {
        STUDENT: 'STUDENT',
        CORPORATE:'CORPORATE'
    }
};

const STATUS_MSG = {
	ERROR: {
		TOKEN_GENERATION_ERROR: {
			statusCode:400,
			customMessage : "Sorry!! Not able to generate token as username or password is invalid.",
			type : "TOKEN_GENERATION_ERROR"
		},
		TOKEN_SIGN_ERROR :{
			statusCode:401,
			customMessage : "Token Passed is Invalid",
			type : "TOKEN_SIGN_ERROR"
		},       
		TOKEN_NOT_PASSED :{
			statusCode:401,
			customMessage : "Token is not passed.",
			type : "TOKEN_NOT_PASSED"
		},
		IMAGE_UPLOAD_ERROR:{
			statusCode:400,
			customMessage : "Image is corrupted of Url is wrong!",
			type : "IMAGE_UPLOAD_ERROR"        
		},
        USER_ALREADY_EXIST:{
            statusCode:400,
            customMessage : "User Already Exist",
            type : "USER_ALREADY_EXIST"
		},
		MONGO_ERROR:{
            statusCode:400,
            customMessage : "Error while perfoming DB query",
            type : "MONGO_ERROR"
		}
	},

	SUCCESS: {
		TOKEN_GENERATION_SUCCESS:{
			statusCode:200,
			customMessage : "Your Token is Generated",
			type : "TOKEN_GENERATION_SUCCESS"
		}
	}
};


const APP_CONSTANTS = {
	SERVER: SERVER,
	STATUS_MSG:STATUS_MSG,
	swaggerDefaultResponseMessages:swaggerDefaultResponseMessages,
	DATABASE:DATABASE
};

module.exports = APP_CONSTANTS;
