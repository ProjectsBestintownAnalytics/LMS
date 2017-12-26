/*
	***************************************************************************************************
	*
	*		Controller for Login Functionality for providing JWT.
	*
	***************************************************************************************************
*/

const auth = require("../auth/auth");
const Service = require('../services')
let createAdmin = (req,callback) =>{
    Service.AdminService.createAdmin(req.body,(err,data)=>{
        console.log(req.body,err,data)
        if(err){
            callback(err)
        }
        else{
            callback(null,data)
        }
    })
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
            callback(err)
        }
        else{
            callback(null,data)
        }
    })
}



module.exports = {
    createAdmin : createAdmin,
    getAdmin:getAdmin
};