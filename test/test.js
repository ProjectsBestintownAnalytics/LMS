const assert = require("assert");
const server = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);
let token;

describe("/POST login", ()=>{
	it("it should not POST a login without username and password", (done) => {
		let login = {
			username: "test",
			password: "test"
		};
		chai.request(server)
			.post("/login")
			.send(login)
			.end((err, res) => {
				res.should.have.status(200);
				token= res.text;
				done();
			});
	});

});


describe("/GET createThumbnail", ()=>{
	it("it should not pass without token", function(done) {
		let url = "https://www.w3schools.com/w3css/img_fjords.jpg";
		chai.request(server)
			.get("/createThumbnail?url="+url)
			.set("Authorization", token)
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});

});



describe("/POST jsonPatch", () => {
	it("it should not POST the request without authorization token", (done) => {
			
		let payload = {
			"json_payload":{
				"test":"test"
			},
			"json_patch": [{"op": "replace", "path": "/test", "value": "bar"},{"op": "add", "path": "/new", "value": "bar"}]
		};
		chai.request(server)
			.post("/jsonPatch")
			.set("Authorization", token)
			.send(payload)
			.end((err, res) => {
				res.should.have.status(200);
				res.should.not.have.property("name").eql("JsonWebTokenError");				 
				done();
			});
	});

});