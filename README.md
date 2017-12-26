
# Backend Task Solution

[![Build Status](https://travis-ci.org/shubham-mahajan/backend-task.svg?branch=master)](https://travis-ci.org/shubham-mahajan/backend-task)

----------------
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them <br/>

Install pm2 using 

```
npm install -g pm2
```

Install GraphicsMagick and ImageMagick

```
sudo yum install GraphicsMagick GraphicsMagick-devel // For RHEL
sudo apt-get install graphicsmagick //For Ubuntu
```

If there is any problem while installing graphicsmagick, try this.

```
yum install -y gcc libpng libjpeg libpng-devel libjpeg-devel ghostscript libtiff libtiff-devel freetype freetype-devel
wget ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/1.3/GraphicsMagick-1.3.21.tar.gz
tar zxvf GraphicsMagick-1.3.21.tar.gz
cd GraphicsMagick-1.3.21
./configure --enable-shared
make
make install
yum install -y ImageMagick ImageMagick-devel
```



Run test using
```
npm test
```

Add keymetrics for Monitoring 
```
pm2 link dwrx2hls0xhtb4w aafwn33ams049to //pm2 link publickey privatekey
```

Run server using
```
npm start
```

### Installing

A step by step series of guide that tell you have to get a development env running

Install dependencies using
```
npm install
```

Wait for all the dependencies to get install, these dependencies are installed from package.json.

## Running the tests

Run the test using following command

```
npm test
```


## Deployment in Docker

Add additional notes about how to deploy this in docker

```
```


## Endpoints

- **[<code>POST</code> login](https://github.com/shubham-mahajan/backend-task/blob/master/documenation/login.md)*
- **[<code>POST</code> JSON-Patch](https://github.com/shubham-mahajan/backend-task/blob/master/documenation/json_patch.md)*
- **[<code>GET</code> Create Thumbnail](https://github.com/shubham-mahajan/backend-task/blob/master/documenation/createThumbnail.md)*