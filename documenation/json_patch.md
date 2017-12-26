# Json Patch

## Description
Return the Json after applying json patch to the json object

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
- **json_payload** _(required)_ - Object
- **json_patch** _(required)_ - Object

## Return format
A json object 

```
{
    "test": "bar",
    "new": "bar"
}
```


***

## Example
**Request**
**Request Type: POST **
**URL**
```
    http://localhost:3000/jsonPatch
```
**Request**


```
{
	"json_payload":{
		"test":"test"
	},
	"json_patch": [{"op": "replace", "path": "/test", "value": "bar"},{"op": "add", "path": "/new", "value": "bar"}]
}
```

**Response**

```
{
    "test": "bar",
    "new": "bar"
}
```
