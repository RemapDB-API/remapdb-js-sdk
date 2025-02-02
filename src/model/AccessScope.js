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
 * The AccessScope model module.
 * @module model/AccessScope
 * @version 1.0
 */
export default class AccessScope {
  /**
   * Constructs a new <code>AccessScope</code>.
   * The name of the access scope.
   * @alias module:model/AccessScope
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AccessScope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessScope} obj Optional instance to populate.
   * @return {module:model/AccessScope} The populated <code>AccessScope</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AccessScope();
    }
    return obj;
  }
}
