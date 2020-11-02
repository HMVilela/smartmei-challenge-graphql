const crawler = require('../controllers/crawler.controller');
const exchange = require('../controllers/exchange.controller');

const resolvers = {
    Query: {
      async taxConsult(_, url) {
        const transferInfo = await crawler.getTransferTax(url);
        const exchangeMultipliers = await exchange.getExchangeMultipliers();

        return {
          description: transferInfo.description,
          valueBRL: transferInfo.tax.toFixed(2),
          valueUSD: parseFloat(transferInfo.tax * exchangeMultipliers.USD).toFixed(2),
          valueEUR: parseFloat(transferInfo.tax * exchangeMultipliers.EUR).toFixed(2),
          date: new Date().toISOString()
        }
      }
    },
  };

module.exports = resolvers;