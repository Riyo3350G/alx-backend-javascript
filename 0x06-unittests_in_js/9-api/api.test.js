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

  it('gET /cart/11 returns correct response', () => new Promise((done) => {
    request.get(`${URL}/cart/11`, (_err, res, body) => {
      // eslint-disable-next-line jest/valid-expect
      expect(res.statusCode).to.be.equal(200);
      // eslint-disable-next-line jest/valid-expect
      expect(body).to.be.equal('Payment methods for cart 11');
      done();
    });
  }));

  it('correct status code when :id is NOT a number (=> 404)?', () => new Promise((done) => {
    // eslint-disable-next-line no-unused-vars
    request.get(`${URL}/cart/twelve`, (_err, res, _body) => {
      // eslint-disable-next-line jest/valid-expect
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));
});
