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
import VehicleTypeShort from './VehicleTypeShort';

/**
 * The ManufacturerModel model module.
 * @module model/ManufacturerModel
 * @version 1.0
 */
export default class ManufacturerModel {
  /**
   * Constructs a new <code>ManufacturerModel</code>.
   * Model object
   * @alias module:model/ManufacturerModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ManufacturerModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManufacturerModel} obj Optional instance to populate.
   * @return {module:model/ManufacturerModel} The populated <code>ManufacturerModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ManufacturerModel();
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
    }
    return obj;
  }
}

/**
 * Model ID.
 * @member {Number} id
 */
ManufacturerModel.prototype.id = undefined;

/**
 * Model Name.
 * @member {String} name
 */
ManufacturerModel.prototype.name = undefined;

/**
 * URL-friendly name (slug).
 * @member {String} slug
 */
ManufacturerModel.prototype.slug = undefined;

/**
 * Link to model's photo.
 * @member {String} photo
 */
ManufacturerModel.prototype.photo = undefined;

/**
 * @member {module:model/VehicleTypeShort} type
 */
ManufacturerModel.prototype.type = undefined;

/**
 * @member {module:model/ManufacturerShort} manufacturer
 */
ManufacturerModel.prototype.manufacturer = undefined;

