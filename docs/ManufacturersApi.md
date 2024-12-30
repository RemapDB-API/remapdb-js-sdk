# RemapdbJsSdk.ManufacturersApi

All URIs are relative to *https://api.remapdb.com/v1/vehicles*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getManufacturer**](ManufacturersApi.md#getManufacturer) | **GET** /manufacturers/{manufacturer_id} | Show all manufacturer metadata along with its corresponding models
[**listManufacturers**](ManufacturersApi.md#listManufacturers) | **GET** /manufacturers/type/{type_id} | Show all manufacturers from specific type

<a name="getManufacturer"></a>
# **getManufacturer**
> ManufacturerWModels getManufacturer(manufacturerId, opts)

Show all manufacturer metadata along with its corresponding models

Show all manufacturer metadata along with its corresponding models.

### Example
```javascript
import {RemapdbJsSdk} from 'remapdb-js-sdk';
let defaultClient = RemapdbJsSdk.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new RemapdbJsSdk.ManufacturersApi();
let manufacturerId = 56; // Number | Manufacturer ID.
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: `en`. 
};
apiInstance.getManufacturer(manufacturerId, opts, (error, data, response) => {
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

[**ManufacturerWModels**](ManufacturerWModels.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listManufacturers"></a>
# **listManufacturers**
> [Manufacturer] listManufacturers(typeId, opts)

Show all manufacturers from specific type

Show all manufacturers from specific type.

### Example
```javascript
import {RemapdbJsSdk} from 'remapdb-js-sdk';
let defaultClient = RemapdbJsSdk.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new RemapdbJsSdk.ManufacturersApi();
let typeId = 56; // Number | Vehicle type ID.
let opts = { 
  'acceptLanguage': "acceptLanguage_example" // String | Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: `en`. 
};
apiInstance.listManufacturers(typeId, opts, (error, data, response) => {
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
 **typeId** | **Number**| Vehicle type ID. | 
 **acceptLanguage** | **String**| Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: &#x60;en&#x60;.  | [optional] 

### Return type

[**[Manufacturer]**](Manufacturer.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

