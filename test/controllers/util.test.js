var Util = require('../../controllers/util');
var assert = require('chai').assert;

describe('testing util functions', function () {
  it('add: should return 6', function (done) {
  		Util.add(2,4, function(result){
  			assert.equal(result, 6);
  			done();
  		});
    	
  });
  it('mul: should return 8', function (done) {
  		Util.mul(2,4, function(result){
  			assert.equal(result, 8);
  			done();
  		});
    	
  });
});
