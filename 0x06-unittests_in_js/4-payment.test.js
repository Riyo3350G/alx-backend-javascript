const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  const consoleSpy = sinon.spy(console, 'log');
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('should call the calculateNumber function', () => {
    // eslint-disable-next-line no-unused-vars
    const calcStubNum = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect, no-undef
    expect(calcStubNum.calledWithExactly('SUM', 100, 20)).to.be.true;
    // eslint-disable-next-line no-unused-expressions, no-undef, jest/valid-expect
    expect(calcStubNum.alwaysReturned(10)).to.be.true;
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;
    // eslint-disable-next-line no-undef
    calcStubNum.restore();
    consoleSpy.restore();
  });
});
