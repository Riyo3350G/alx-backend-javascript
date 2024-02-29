const request = require('request');
const { expect } = require('chai');

describe('aPI integration test', () => {
  const URL = 'http://localhost:7865';

  it('gET / returns correct response', () => new Promise((done) => {
    request.get(`${URL}/`, (_err, res, body) => {
      // eslint-disable-next-line jest/valid-expect
      expect(res.statusCode).to.be.equal(200);
      // eslint-disable-next-line jest/valid-expect
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));
});
