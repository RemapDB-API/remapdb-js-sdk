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
import EngineStagePerformance from './EngineStagePerformance';

/**
 * The EngineStage model module.
 * @module model/EngineStage
 * @version 1
 */
export default class EngineStage {
  /**
   * Constructs a new <code>EngineStage</code>.
   * Stage object
   * @alias module:model/EngineStage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EngineStage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EngineStage} obj Optional instance to populate.
   * @return {module:model/EngineStage} The populated <code>EngineStage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EngineStage();
      if (data.hasOwnProperty('stage_number'))
        obj.stageNumber = ApiClient.convertToType(data['stage_number'], 'Number');
      if (data.hasOwnProperty('performance'))
        obj.performance = EngineStagePerformance.constructFromObject(data['performance']);
      if (data.hasOwnProperty('modifications_required'))
        obj.modificationsRequired = ApiClient.convertToType(data['modifications_required'], 'String');
    }
    return obj;
  }
}

/**
 * Remap stage number.
 * @member {Number} stageNumber
 */
EngineStage.prototype.stageNumber = undefined;

/**
 * @member {module:model/EngineStagePerformance} performance
 */
EngineStage.prototype.performance = undefined;

/**
 * Modifications needed.
 * @member {String} modificationsRequired
 */
EngineStage.prototype.modificationsRequired = undefined;

