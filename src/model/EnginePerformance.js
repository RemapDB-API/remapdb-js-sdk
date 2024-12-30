/*
 * RemapDB REST API Documentation
 * Vehicle Tuning Database API - For Tuning services and Tuners.  Access comprehensive vehicle details, including types, manufacturers, models, engines, ECU and TCU info, tuning tools, dyno charts, and available tuning or remap stages with their performance gains. 
 *
 * OpenAPI spec version: 1
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
import EnginePerformanceDyno from './EnginePerformanceDyno';

/**
 * The EnginePerformance model module.
 * @module model/EnginePerformance
 * @version 1
 */
export default class EnginePerformance {
  /**
   * Constructs a new <code>EnginePerformance</code>.
   * Engine performance object
   * @alias module:model/EnginePerformance
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EnginePerformance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnginePerformance} obj Optional instance to populate.
   * @return {module:model/EnginePerformance} The populated <code>EnginePerformance</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EnginePerformance();
      if (data.hasOwnProperty('power'))
        obj.power = ApiClient.convertToType(data['power'], 'Number');
      if (data.hasOwnProperty('torque'))
        obj.torque = ApiClient.convertToType(data['torque'], 'Number');
      if (data.hasOwnProperty('dyno_values'))
        obj.dynoValues = EnginePerformanceDyno.constructFromObject(data['dyno_values']);
    }
    return obj;
  }
}

/**
 * Horse power (metric).
 * @member {Number} power
 */
EnginePerformance.prototype.power = undefined;

/**
 * Torque in Nm.
 * @member {Number} torque
 */
EnginePerformance.prototype.torque = undefined;

/**
 * @member {module:model/EnginePerformanceDyno} dynoValues
 */
EnginePerformance.prototype.dynoValues = undefined;

