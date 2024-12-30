/*
 * RemapDB REST API Documentation
 * Vehicle Tuning Database API - For Tuning services and Tuners.  Access comprehensive vehicle details, including types, manufacturers, models, engines, ECU and TCU info, tuning tools, dyno charts, and available tuning or remap stages with their performance gains. 
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.64
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import Error from '../model/Error';
import InlineResponse200 from '../model/InlineResponse200';

/**
* Search service.
* @module api/SearchApi
* @version 1.0
*/
export default class SearchApi {

    /**
    * Constructs a new SearchApi. 
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the search operation.
     * @callback moduleapi/SearchApi~searchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Searches through manufacturers, models, generations and engines
     * Searches through manufacturers, models, generations and engines.
     * @param {String} query Search query.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.acceptLanguage Method accept custom language. Content of the header should be the code of the language you are requesting. E.g.: &#x60;en&#x60;. 
     * @param {module:api/SearchApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    search(query, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling search");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'query': query
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}