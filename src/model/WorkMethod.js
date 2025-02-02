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
import ApiClient from '../ApiClient';

/**
 * The WorkMethod model module.
 * @module model/WorkMethod
 * @version 1.0
 */
export default class WorkMethod {
  /**
   * Constructs a new <code>WorkMethod</code>.
   * Work method object
   * @alias module:model/WorkMethod
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>WorkMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkMethod} obj Optional instance to populate.
   * @return {module:model/WorkMethod} The populated <code>WorkMethod</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkMethod();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Name.
 * @member {String} name
 */
WorkMethod.prototype.name = undefined;

