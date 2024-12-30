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
import ManufacturerShort from './ManufacturerShort';
import ModelGeneration from './ModelGeneration';
import VehicleTypeShort from './VehicleTypeShort';

/**
 * The ModelWGenerations model module.
 * @module model/ModelWGenerations
 * @version 1.0
 */
export default class ModelWGenerations {
  /**
   * Constructs a new <code>ModelWGenerations</code>.
   * Model metadata object
   * @alias module:model/ModelWGenerations
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelWGenerations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelWGenerations} obj Optional instance to populate.
   * @return {module:model/ModelWGenerations} The populated <code>ModelWGenerations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelWGenerations();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('slug'))
        obj.slug = ApiClient.convertToType(data['slug'], 'String');
      if (data.hasOwnProperty('photo'))
        obj.photo = ApiClient.convertToType(data['photo'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = VehicleTypeShort.constructFromObject(data['type']);
      if (data.hasOwnProperty('manufacturer'))
        obj.manufacturer = ManufacturerShort.constructFromObject(data['manufacturer']);
      if (data.hasOwnProperty('generations'))
        obj.generations = ApiClient.convertToType(data['generations'], [ModelGeneration]);
    }
    return obj;
  }
}

/**
 * Model ID.
 * @member {Number} id
 */
ModelWGenerations.prototype.id = undefined;

/**
 * Name of the model.
 * @member {String} name
 */
ModelWGenerations.prototype.name = undefined;

/**
 * URL-friendly name (slug).
 * @member {String} slug
 */
ModelWGenerations.prototype.slug = undefined;

/**
 * Link to model's photo.
 * @member {String} photo
 */
ModelWGenerations.prototype.photo = undefined;

/**
 * @member {module:model/VehicleTypeShort} type
 */
ModelWGenerations.prototype.type = undefined;

/**
 * @member {module:model/ManufacturerShort} manufacturer
 */
ModelWGenerations.prototype.manufacturer = undefined;

/**
 * List with all the models.
 * @member {Array.<module:model/ModelGeneration>} generations
 */
ModelWGenerations.prototype.generations = undefined;

