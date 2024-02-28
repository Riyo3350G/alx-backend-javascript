const { expect } = require('chai');
const sinon = require('sinon');

// eslint-disable-next-line no-unused-vars
const { spy } = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('should call the calculateNumber function', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    const spy = sinon.spy(console, 'log');
    const req = sendPaymentRequestToApi(100, 20);
    // eslint-disable-next-line jest/valid-expect
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    // eslint-disable-next-line jest/valid-expect
    expect(spy.calledOnceWithExactly('The total is: 10'));
    // eslint-disable-next-line jest/valid-expect
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(req);
    stub.restore();
    spy.restore();
  });
});
