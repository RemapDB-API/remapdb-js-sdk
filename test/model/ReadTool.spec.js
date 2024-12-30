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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RemapdbJsSdk);
  }
}(this, function(expect, RemapdbJsSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ReadTool', function() {
      beforeEach(function() {
        instance = new RemapdbJsSdk.ReadTool();
      });

      it('should create an instance of ReadTool', function() {
        // TODO: update the code to test ReadTool
        expect(instance).to.be.a(RemapdbJsSdk.ReadTool);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturer (base name: "manufacturer")', function() {
        // TODO: update the code to test the property manufacturer
        expect(instance).to.have.property('manufacturer');
        // expect(instance.manufacturer).to.be(expectedValueLiteral);
      });

    });
  });

}));
