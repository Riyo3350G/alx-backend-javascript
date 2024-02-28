const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(success), where success == true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        // eslint-disable-next-line jest/valid-expect
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
  }));
});
