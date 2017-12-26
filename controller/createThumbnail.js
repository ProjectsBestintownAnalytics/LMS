/*
	***************************************************************************************************
	*
	*		Controller for creating thumbnail with the public URL.
	*
	***************************************************************************************************
*/

const gm = require("gm");
const request = require("request");
const imageMagick = gm.subClass({ imageMagick: true });


let createThumbnailImage= (path,callback) => {
	let fileName, fileExtension;
	fileName = path;
	fileExtension = fileName.substr((fileName.lastIndexOf(".") + 1));
	imageMagick(request(path))
		.resize("50", "50",  "!")
		.gravity("Center")
		.toBuffer(fileExtension, (err,buffer)=> {
			if(err){
				callback(err);
			}else{
				callback(null,buffer);		
			}
		});
};

module.exports = {
	createThumbnail:createThumbnailImage
};