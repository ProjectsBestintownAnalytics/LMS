/*
	*******************************************
	*
	*		Controller for JSON - Patch
	*
	*******************************************
*/


const jsonpatch = require("json-patch");

let jsonpatcher = (payload,callback) =>{
	let patched_json = jsonpatch.apply(payload.json_payload,payload.json_patch);
	callback(null,patched_json);
};

module.exports = {
	jsonpatcher:jsonpatcher
};