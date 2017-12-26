'use strict';
let mongo={};

if(!process.env.NODE_ENV) {

    mongo.URI = process.env.MONGO_URI || 'mongodb://127.0.0.1/lms-dev';
    mongo.port = 27017

}
else if(process.env.NODE_ENV=='dev' || process.env.NODE_ENV=='DEV')
{
    mongo.URI = process.env.MONGO_URI || 'mongodb://127.0.0.1/lms-dev';
    mongo.port = 27017

}
else if(process.env.NODE_ENV=='test' || process.env.NODE_ENV=='TEST')
{
    mongo.URI = process.env.MONGO_URI || 'mongodb://127.0.0.1/lms-dev';
    mongo.port = 27017

}
else if(process.env.NODE_ENV=='production' || process.env.NODE_ENV=='PRODUCTION')
{
    mongo.URI = process.env.MONGO_URI || 'mongodb://127.0.0.1/lms-dev';
    mongo.port = 27017
}


module.exports = {
    mongo: mongo
};