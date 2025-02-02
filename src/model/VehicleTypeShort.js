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
 * The VehicleTypeShort model module.
 * @module model/VehicleTypeShort
 * @version 1.0
 */
export default class VehicleTypeShort {
  /**
   * Constructs a new <code>VehicleTypeShort</code>.
   * Vehicle type object
   * @alias module:model/VehicleTypeShort
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>VehicleTypeShort</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleTypeShort} obj Optional instance to populate.
   * @return {module:model/VehicleTypeShort} The populated <code>VehicleTypeShort</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VehicleTypeShort();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Vehicle type ID.
 * @member {Number} id
 */
VehicleTypeShort.prototype.id = undefined;

/**
 * Name.
 * @member {String} name
 */
VehicleTypeShort.prototype.name = undefined;

