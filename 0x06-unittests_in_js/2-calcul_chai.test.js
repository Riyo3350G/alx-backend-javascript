const chai = require('chai');

const assert = chai.expect;
// eslint-disable-next-line no-unused-vars
const calculateNumber = require('./2-calcul_chai');

describe('#calculateNumber', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 4 for (1, 3)', () => {
    assert(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 5 for (1, 3.7)', () => {
    assert(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 5 for (1.2, 3.7)', () => {
    assert(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 6 for (1.5, 3.7)', () => {
    assert(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return -2 for (1, 3)', () => {
    assert(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return -3 for (1, 3.7)', () => {
    assert(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return -3 for (1.2, 3.7)', () => {
    assert(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return -2 for (1.5, 3.7)', () => {
    assert(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 0.3333333333333333 for (1, 3)', () => {
    assert(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 0.25 for (1, 3.7)', () => {
    assert(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 0.25 for (1.2, 3.7)', () => {
    assert(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return 0.5 for (1.5, 3.7)', () => {
    assert(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should return Error for (1, 0)', () => {
    assert(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  });
});
