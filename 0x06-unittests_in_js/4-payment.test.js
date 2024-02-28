const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  // eslint-disable-next-line jest/no-hooks
  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10); // Always return 10
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  // eslint-disable-next-line jest/prefer-expect-assertions
  it('should calculate the total payment', () => {
    // eslint-disable-next-line no-undef
    sendPaymentRequestToApi(100, 20);
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect
    expect(calculateNumberStub.calledOnce).to.be.true;
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect
    expect(consoleLogSpy.calledOnce).to.be.true;
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });
});
