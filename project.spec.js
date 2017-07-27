const assert = require('assert');
const calculator = require('./calculator');

describe('test project', () => {
  it('should have a passing test', () => {
      assert(1);
  });

  it('should sum 1 and 2', () => {
      assert.equal(calculator.sum(1, 2), 1 + 2);
  });
});