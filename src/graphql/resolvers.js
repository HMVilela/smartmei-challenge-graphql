const crawler = require('../controllers/crawler.controller');
const exchange = require('../controllers/exchange.controller');

// GraphQL query for Transfer Tax Consulting.
// It executes the crawler and exchange rates request and return the query response
const resolvers = {
    Query: {
      async transferTaxConsult(_, url) {
        const transferInfo = await crawler.getTransferTax(url);
        const exchangeMultipliers = await exchange.getRates();

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