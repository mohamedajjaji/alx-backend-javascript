const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should handle floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should round down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should round down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should round down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should round up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('should round up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('should round up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should handle rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
