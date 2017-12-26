'use strict';
let Mongoose = require('mongoose');
let Config = require('../config');



//Connect to MongoDB
Mongoose.connect(Config.dbConfig.mongo.URI, (err)=> {
    if (err) {
        console.log("DB Error: ", err);
        process.exit(1);
    } else {
        console.log('MongoDB Connected');
    }
});

exports.Mongoose = Mongoose;