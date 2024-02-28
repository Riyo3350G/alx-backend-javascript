const { expect } = require('chai');

describe('testing numbers', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('1 is equal to 1', () => {
    // eslint-disable-next-line no-unused-expressions, no-self-compare, jest/valid-expect
    expect(1 === 1).to.be.true;
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('2 is equal to 2', () => {
    // eslint-disable-next-line no-unused-expressions, no-self-compare, jest/valid-expect
    expect(2 === 2).to.be.true;
  });

  // eslint-disable-next-line jest/prefer-expect-assertions, jest/no-disabled-tests
  it.skip('1 is equal to 3', () => {
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect
    expect(1 === 3).to.be.true;
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('3 is equal to 3', () => {
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect, no-self-compare
    expect(3 === 3).to.be.true;
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('4 is equal to 4', () => {
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect, no-self-compare
    expect(4 === 4).to.be.true;
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('5 is equal to 5', () => {
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect, no-self-compare
    expect(5 === 5).to.be.true;
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('6 is equal to 6', () => {
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect, no-self-compare
    expect(6 === 6).to.be.true;
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('7 is equal to 7', () => {
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect, no-self-compare
    expect(7 === 7).to.be.true;
  });
});
