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
 * The ManufacturerType model module.
 * @module model/ManufacturerType
 * @version 1.0
 */
export default class ManufacturerType {
  /**
   * Constructs a new <code>ManufacturerType</code>.
   * Vehicle type object.
   * @alias module:model/ManufacturerType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ManufacturerType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManufacturerType} obj Optional instance to populate.
   * @return {module:model/ManufacturerType} The populated <code>ManufacturerType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ManufacturerType();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Vehicle Type ID.
 * @member {Number} id
 */
ManufacturerType.prototype.id = undefined;

/**
 * The name of the vehicle type.
 * @member {String} name
 */
ManufacturerType.prototype.name = undefined;

