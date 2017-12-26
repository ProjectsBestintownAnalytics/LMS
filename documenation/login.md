# Login

## Description
Return the JWT generated after login

***

## Parameters
- **username** _(required)_ - username  (String) 
- **password** _(required)_ - password  (String) 

## Return format
A string with the signed token e.g.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InR5ZXN0IiwiaWF0IjoxNTEzNjIzNzY3LCJleHAiOjE1MTQyMjM3Njd9.DDNoP_UwjI6EbHjZgaBEgCIzqF0T7us094FetLfl-Eg
```

## Errors

```
{
    "statusCode": 400,
    "customMessage": "Sorry!! Not able to generate token as username or password is invalid.",
    "type": "TOKEN_GENERATION_ERROR"
}
```

***

## Example
**Request**
**Request Type: POST **
**URL**
```
    http://localhost:3000/login
```
**Request Params**
```
{
	"username":"test",
	"password":"tyest"
}
```
**Response**
``` string
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InR5ZXN0IiwiaWF0IjoxNTEzNjIzNzY3LCJleHAiOjE1MTQyMjM3Njd9.DDNoP_UwjI6EbHjZgaBEgCIzqF0T7us094FetLfl-Eg
```