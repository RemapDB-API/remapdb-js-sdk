# RemapdbJsSdk.TypesApi

All URIs are relative to *https://api.remapdb.com/v1/vehicles*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTypes**](TypesApi.md#listTypes) | **GET** /types | Show vehicle types

<a name="listTypes"></a>
# **listTypes**
> [VehicleType] listTypes(opts)

Show vehicle types

Provides a list of all available vehicle types.

### Example
```javascript
import {RemapdbJsSdk} from 'remapdb-js-sdk';
let defaultClient = RemapdbJsSdk.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new RemapdbJsSdk.TypesApi();
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: `en`. 
};
apiInstance.listTypes(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **String**| Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: &#x60;en&#x60;.  | [optional] 

### Return type

[**[VehicleType]**](VehicleType.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

