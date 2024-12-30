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
 * The ModelShort model module.
 * @module model/ModelShort
 * @version 1.0
 */
export default class ModelShort {
  /**
   * Constructs a new <code>ModelShort</code>.
   * Model object
   * @alias module:model/ModelShort
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelShort</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelShort} obj Optional instance to populate.
   * @return {module:model/ModelShort} The populated <code>ModelShort</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelShort();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Model ID.
 * @member {Number} id
 */
ModelShort.prototype.id = undefined;

/**
 * Name of the model.
 * @member {String} name
 */
ModelShort.prototype.name = undefined;

