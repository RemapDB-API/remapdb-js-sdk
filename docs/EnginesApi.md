# RemapdbJsSdk.EnginesApi

All URIs are relative to *https://api.remapdb.com/v1/vehicles*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEngine**](EnginesApi.md#getEngine) | **GET** /engines/{engine_id} | Show engine metadata along with its performance and tuning information
[**listEngines**](EnginesApi.md#listEngines) | **GET** /engines/generation/{generation_id} | Show all engines from specific generation

<a name="getEngine"></a>
# **getEngine**
> EngineWTuning getEngine(engineId, opts)

Show engine metadata along with its performance and tuning information

Show engine metadata along with its performance and tuning information.

### Example
```javascript
import {RemapdbJsSdk} from 'remapdb-js-sdk';
let defaultClient = RemapdbJsSdk.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new RemapdbJsSdk.EnginesApi();
let engineId = 56; // Number | Engine ID.
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: `en`. 
};
apiInstance.getEngine(engineId, opts, (error, data, response) => {
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
 **engineId** | **Number**| Engine ID. | 
 **acceptLanguage** | **String**| Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: &#x60;en&#x60;.  | [optional] 

### Return type

[**EngineWTuning**](EngineWTuning.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listEngines"></a>
# **listEngines**
> [Engine] listEngines(generationId, opts)

Show all engines from specific generation

Show all engines from specific generation.

### Example
```javascript
import {RemapdbJsSdk} from 'remapdb-js-sdk';
let defaultClient = RemapdbJsSdk.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new RemapdbJsSdk.EnginesApi();
let generationId = 56; // Number | Generation ID.
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: `en`. 
};
apiInstance.listEngines(generationId, opts, (error, data, response) => {
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
 **generationId** | **Number**| Generation ID. | 
 **acceptLanguage** | **String**| Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: &#x60;en&#x60;.  | [optional] 

### Return type

[**[Engine]**](Engine.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

