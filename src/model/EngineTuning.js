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
import EngineStage from './EngineStage';
import ReadTool from './ReadTool';
import TuningOption from './TuningOption';
import WorkMethod from './WorkMethod';

/**
 * The EngineTuning model module.
 * @module model/EngineTuning
 * @version 1.0
 */
export default class EngineTuning {
  /**
   * Constructs a new <code>EngineTuning</code>.
   * Engine tuning object
   * @alias module:model/EngineTuning
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EngineTuning</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EngineTuning} obj Optional instance to populate.
   * @return {module:model/EngineTuning} The populated <code>EngineTuning</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EngineTuning();
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [TuningOption]);
      if (data.hasOwnProperty('read_tools'))
        obj.readTools = ApiClient.convertToType(data['read_tools'], [ReadTool]);
      if (data.hasOwnProperty('work_methods'))
        obj.workMethods = ApiClient.convertToType(data['work_methods'], [WorkMethod]);
      if (data.hasOwnProperty('stages'))
        obj.stages = ApiClient.convertToType(data['stages'], [EngineStage]);
    }
    return obj;
  }
}

/**
 * Available remap options for this engine.
 * @member {Array.<module:model/TuningOption>} options
 */
EngineTuning.prototype.options = undefined;

/**
 * List with the tuning tools which can be used to read this engine.
 * @member {Array.<module:model/ReadTool>} readTools
 */
EngineTuning.prototype.readTools = undefined;

/**
 * List with the methods to use when reading this engine.
 * @member {Array.<module:model/WorkMethod>} workMethods
 */
EngineTuning.prototype.workMethods = undefined;

/**
 * List with Remap/Tuning Stages.
 * @member {Array.<module:model/EngineStage>} stages
 */
EngineTuning.prototype.stages = undefined;

