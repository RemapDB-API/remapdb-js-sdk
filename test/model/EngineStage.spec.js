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
    describe('EngineStage', function() {
      beforeEach(function() {
        instance = new RemapdbJsSdk.EngineStage();
      });

      it('should create an instance of EngineStage', function() {
        // TODO: update the code to test EngineStage
        expect(instance).to.be.a(RemapdbJsSdk.EngineStage);
      });

      it('should have the property stageNumber (base name: "stage_number")', function() {
        // TODO: update the code to test the property stageNumber
        expect(instance).to.have.property('stageNumber');
        // expect(instance.stageNumber).to.be(expectedValueLiteral);
      });

      it('should have the property performance (base name: "performance")', function() {
        // TODO: update the code to test the property performance
        expect(instance).to.have.property('performance');
        // expect(instance.performance).to.be(expectedValueLiteral);
      });

      it('should have the property modificationsRequired (base name: "modifications_required")', function() {
        // TODO: update the code to test the property modificationsRequired
        expect(instance).to.have.property('modificationsRequired');
        // expect(instance.modificationsRequired).to.be(expectedValueLiteral);
      });

    });
  });

}));
