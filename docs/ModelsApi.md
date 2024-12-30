# RemapdbJsSdk.ModelsApi

All URIs are relative to *https://api.remapdb.com/v1/vehicles*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getModel**](ModelsApi.md#getModel) | **GET** /models/{model_id} | Show all model metadata along with its corresponding generations
[**listModels**](ModelsApi.md#listModels) | **GET** /models/manufacturer/{manufacturer_id} | Show all models from specific manufacturer

<a name="getModel"></a>
# **getModel**
> ModelWGenerations getModel(modelId, opts)

Show all model metadata along with its corresponding generations

Show all model metadata along with its corresponding generations.

### Example
```javascript
import {RemapdbJsSdk} from 'remapdb-js-sdk';
let defaultClient = RemapdbJsSdk.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new RemapdbJsSdk.ModelsApi();
let modelId = 56; // Number | Model ID.
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: `en`. 
};
apiInstance.getModel(modelId, opts, (error, data, response) => {
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
 **modelId** | **Number**| Model ID. | 
 **acceptLanguage** | **String**| Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: &#x60;en&#x60;.  | [optional] 

### Return type

[**ModelWGenerations**](ModelWGenerations.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listModels"></a>
# **listModels**
> [ManufacturerModel] listModels(manufacturerId, opts)

Show all models from specific manufacturer

Show all models from specific manufacturer.

### Example
```javascript
import {RemapdbJsSdk} from 'remapdb-js-sdk';
let defaultClient = RemapdbJsSdk.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new RemapdbJsSdk.ModelsApi();
let manufacturerId = 56; // Number | Manufacturer ID.
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: `en`. 
};
apiInstance.listModels(manufacturerId, opts, (error, data, response) => {
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
 **manufacturerId** | **Number**| Manufacturer ID. | 
 **acceptLanguage** | **String**| Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: &#x60;en&#x60;.  | [optional] 

### Return type

[**[ManufacturerModel]**](ManufacturerModel.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

