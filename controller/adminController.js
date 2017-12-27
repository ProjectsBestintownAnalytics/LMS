/*
	***************************************************************************************************
	*
	*		Controller for Login Functionality for providing JWT.
	*
	***************************************************************************************************
*/

const auth = require("../auth/auth");
const Service = require('../services')
const Config = require('../config')
let createAdmin = (req,callback) =>{

    (async()=>{
        let query = {
            email:req.body.email
        }
        await Service.AdminService.getAdmin(query,{},{},(err,data)=>{
            if(err){
                callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.MONGO_ERROR)
            }
            else{
                if(data.length > 0){
                    callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.USER_ALREADY_EXIST);
                }
            }
        });

        await Service.AdminService.createAdmin(req.body,(err,data)=>{
            console.log(req.body,err,data)
            if(err){
                callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.MONGO_ERROR)
            }
            else{
                callback(null,data)
            }
        })


    })()

}

let getAdmin = (req,callback) =>{
	console.log(req.body)
    let query = {
        email:req.body.email,
        password:req.body.password
    }
    Service.AdminService.getAdmin(query, {}, {}, (err,data)=>{
    	console.log(err,data)
        if(err){
            callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.MONGO_ERROR)
        }
        else{
            callback(null,data)
        }
    })
}

let createAdminRoles = (req,callback) => {
    Service.AdminRolesService.createAdminRoles(req.body,(err,data)=>{
        if(err){
            callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.MONGO_ERROR)
        }
        else {
            callback(null,data)
        }
    })
}

let getAdminRoles = (req,callback) => {
    Service.AdminRolesService.getAdminRoles({},{},{},(err,data)=>{
        if(err){
            callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.MONGO_ERROR)
        }
        else{
            callback(null,data)
        }
    })
}

let createUserByAdmin = (req,callback) =>{

    (async()=>{
        let query = {
            email:req.body.email
        }
        await Service.UserService.getUser(query,{},{},(err,data)=>{
            if(err){
                callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.MONGO_ERROR)
            }
            else{
                if(data.length > 0){
                    callback(Config.APP_CONSTANTS.STATUS_MSG.ERROR.USER_ALREADY_EXIST);
                }
            }
        });

        await Service.UserService.createUser(req.body,(err,data)=>{
            console.log(req.body,err,data)
            if(err){
                callback(err)
            }
            else{
                callback(null,data)
            }
        })


    })()

}

module.exports = {
    createAdmin : createAdmin,
    getAdmin:getAdmin,
    createAdminRoles:createAdminRoles,
    getAdminRoles:getAdminRoles,
    createUserByAdmin:createUserByAdmin
};