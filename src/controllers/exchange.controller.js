const HttpAdapter = require('../util/http-adapter/http-adapter');
const gefa = require('../util/get-exchange/get-exchange-multipliers');

const url = "https://api.exchangeratesapi.io/latest?base=BRL";

// Consumes endpoint of exchangeratesapi and pass to gefa.getExchangeMultipliers() to format response
exports.getRates = async () => {
    let remoteData = await new HttpAdapter().get(url);
    const rates = remoteData.body;
    return gefa.getExchangeMultipliers(rates);
}
