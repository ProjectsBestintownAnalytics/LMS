/*
	****************************************************************************
	*
	*		This will create the server and listen to the port specified in 
	*		appConstant file.
	*
	****************************************************************************
*/

const Express = require("express");
const app = new Express();
const routes = require("./routes");
const bodyParser = require("body-parser");
const CONFIG = require("./config/");
const port = CONFIG.APP_CONSTANTS.SERVER.PORT;
let mongoConnect = require('./utils/mongoConnect');


(async () => {
	await app.listen(port, () =>console.info(`BackEnd Task is running on ${port}`));
	app.use(bodyParser.json()); // support json encoded bodies
	app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
	app.use(routes);
	app.get("/", (req, res) => res.send("Hey Welcome to Backend task, Please go the documentation file.")); // index route if accessed 
	

})();

module.exports = app;