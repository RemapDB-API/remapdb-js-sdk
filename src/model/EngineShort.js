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
 * The EngineShort model module.
 * @module model/EngineShort
 * @version 1.0
 */
export default class EngineShort {
  /**
   * Constructs a new <code>EngineShort</code>.
   * Engine object
   * @alias module:model/EngineShort
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EngineShort</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EngineShort} obj Optional instance to populate.
   * @return {module:model/EngineShort} The populated <code>EngineShort</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EngineShort();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Engine ID.
 * @member {Number} id
 */
EngineShort.prototype.id = undefined;

/**
 * Engine Name.
 * @member {String} name
 */
EngineShort.prototype.name = undefined;

