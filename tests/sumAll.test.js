const chai = require('chai');
const assert = chai.assert;
const sumAll = require('../src/index');

describe('sumAll', () => {
    it('should return the correct sum for [4, 1]', () => {
        assert.strictEqual(sumAll([4, 1]), 10);
    });

    it('should return the correct sum for [1, 4]', () => {
        assert.strictEqual(sumAll([1, 4]), 10);
    });
});