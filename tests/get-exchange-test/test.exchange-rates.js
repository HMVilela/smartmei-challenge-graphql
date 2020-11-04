const expect = require('chai').expect;
const nock = require('nock');

const exchange = require('../../src/controllers/exchange.controller');
const response = require('./exchange-rates.mock');

describe('Get exchange rates test', () => {
  beforeEach(() => {
    nock('https://api.exchangeratesapi.io')
      .get('/latest?base=BRL')
      .reply(200, response);
  });
  it('Should return number values', () => {
    return exchange.getRates()
      .then(response => {
        expect(typeof response.USD).to.equal('number');
        expect(typeof response.EUR).to.equal('number');
      });
  });
});