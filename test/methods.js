var assert = require('assert');
var assertFor = require('../array-assert.js');

describe('assert', function () {
	it('should create a regex array', function () {
		var result = assertFor(['Morón', 'Palomar']);
		
		assert.deepEqual(result, [/m[óo]r[óo]n/i, /p[áa]l[óo]m[áa]r/i]);
	});

	it('should create a number array', function () {
		var result = assertFor([1, 2, 3]);
		
		assert.deepEqual(result, [1, 2, 3]);
		assert.deepEqual(assertFor(3), [3]);
	});
});