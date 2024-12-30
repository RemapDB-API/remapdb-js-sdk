# RemapdbJsSdk.SearchApi

All URIs are relative to *https://api.remapdb.com/v1/vehicles*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **GET** /search | Searches through manufacturers, models, generations and engines

<a name="search"></a>
# **search**
> InlineResponse200 search(query, opts)

Searches through manufacturers, models, generations and engines

Searches through manufacturers, models, generations and engines.

### Example
```javascript
import {RemapdbJsSdk} from 'remapdb-js-sdk';
let defaultClient = RemapdbJsSdk.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new RemapdbJsSdk.SearchApi();
let query = "query_example"; // String | Search query.
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: `en`. 
};
apiInstance.search(query, opts, (error, data, response) => {
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
 **query** | **String**| Search query. | 
 **acceptLanguage** | **String**| Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: &#x60;en&#x60;.  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

