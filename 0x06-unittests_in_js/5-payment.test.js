const { assert } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToAPI', () => {
  let consoleLogSpy;

  // eslint-disable-next-line jest/no-hooks
  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    consoleLogSpy.restore();
  });

  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should log the correct message for totalAmount 100 and totalShipping 20', () => {
    // Arrange
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);

    // Act
    sendPaymentRequestToAPI(100, 20);

    // Assert
    assert.isTrue(consoleLogSpy.calledOnceWithExactly('The total is: 120'));

    // Clean up
    calculateNumberStub.restore();
  });

  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should log the correct message for totalAmount 10 and totalShipping 10', () => {
    // Arrange
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(20);

    // Act
    sendPaymentRequestToAPI(10, 10);

    // Assert
    assert.isTrue(consoleLogSpy.calledOnceWithExactly('The total is: 20'));

    // Clean up
    calculateNumberStub.restore();
  });
});
