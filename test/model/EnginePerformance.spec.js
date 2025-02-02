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
    describe('EnginePerformance', function() {
      beforeEach(function() {
        instance = new RemapdbJsSdk.EnginePerformance();
      });

      it('should create an instance of EnginePerformance', function() {
        // TODO: update the code to test EnginePerformance
        expect(instance).to.be.a(RemapdbJsSdk.EnginePerformance);
      });

      it('should have the property power (base name: "power")', function() {
        // TODO: update the code to test the property power
        expect(instance).to.have.property('power');
        // expect(instance.power).to.be(expectedValueLiteral);
      });

      it('should have the property torque (base name: "torque")', function() {
        // TODO: update the code to test the property torque
        expect(instance).to.have.property('torque');
        // expect(instance.torque).to.be(expectedValueLiteral);
      });

      it('should have the property dynoValues (base name: "dyno_values")', function() {
        // TODO: update the code to test the property dynoValues
        expect(instance).to.have.property('dynoValues');
        // expect(instance.dynoValues).to.be(expectedValueLiteral);
      });

    });
  });

}));
