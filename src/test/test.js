var assert = require('assert');
// var script = require('../js/script');

describe('Array', function() {
  describe('#indexOf()', function() {
	it('should return -1 when the value is not present', function() {
	  assert.equal(-1, [1,2,3].indexOf(4));
	});
  });
});

// describe('Script', function() {
//	 describe('#codebackconvert()', function() {
//	   it('should return 114 with 36 as argument', function() {
//		 const convertNumber = script.codebackconvert(36)
//		 assert.equal(convertNumber, 114);
//	   });
//
//	   it('should return 2 with 2 as argument', function() {
//		 const convertNumber = script.codebackconvert(2)
//		 assert.equal(convertNumber, 2);
//	   });
//	 });
// });
