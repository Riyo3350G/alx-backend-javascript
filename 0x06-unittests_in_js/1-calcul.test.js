const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 4 for (1, 3)', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 5 for (1, 3.7)', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 5 for (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 6 for (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return -2 for (1, 3)', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return -3 for (1, 3.7)', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return -3 for (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return -2 for (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 0.3333333333333333 for (1, 3)', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 0.25 for (1, 3.7)', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 0.25 for (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 0.5 for (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return Error for (1, 0)', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
