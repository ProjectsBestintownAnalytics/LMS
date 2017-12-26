# Create Thumbnail

## Description
Return the Thumbnail of the input image in 50x50

***

##Authorization 
- **token** _(required)_ - Token Generated from the login API need to passed as authorization.

## Errors if token is not passed

```
{
    "statusCode": 401,
    "customMessage": "Token is not passed.",
    "type": "TOKEN_NOT_PASSED"
}
```

## Error if token passed is invalid
```
{
    "statusCode": 401,
    "customMessage": "Token Passed is Invalid",
    "type": "TOKEN_SIGN_ERROR"
}
```


## Parameters
- **url** _(required)_ - Public Url of any image(String)  

## Return format
A thumbnail image with 50x50

```
![alt text](https://github.com/shubham-mahajan/backend-task/blob/master/documenation/thumb.JPG)
```


***

## Example
**Request**
**Request Type: GET **
**URL**
```
    http://localhost:3000/createThumbnail?url=url_of_public_image
```

**Response**
A thumbnail image with 50x50

```
![alt text](https://github.com/shubham-mahajan/backend-task/blob/master/documenation/thumb.JPG)
```
