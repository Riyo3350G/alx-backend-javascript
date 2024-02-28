const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const bigBrother = sinon.spy(console);
    const dummy = sinon.stub(Utils, 'calculateNumber');

    dummy.returns(10);
    sendPaymentRequestToApi(100, 20);
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    // eslint-disable-next-line jest/valid-expect
    expect(dummy.callCount).to.be.equal(1);
    // eslint-disable-next-line no-unused-expressions, jest/valid-expect
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    // eslint-disable-next-line jest/valid-expect
    expect(bigBrother.log.callCount).to.be.equal(1);
    dummy.restore();
    bigBrother.log.restore();
  });
});
