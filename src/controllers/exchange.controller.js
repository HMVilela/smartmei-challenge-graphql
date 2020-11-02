const axios = require('axios');

const url = "https://api.exchangeratesapi.io/latest?base=BRL";

async function getRates(url) {
    console.log("Requesting exchange rates...");
    let response = await axios(url).catch((err) => console.log(err));
    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}

function calculateExchangeMultipliers(rates) {
    console.log("Getting exchange multipliers for BRL...")
    let factors = {
        EUR: parseFloat(rates.EUR),
        USD: parseFloat(rates.USD)    
    }
    return factors;
}

async function getExchangeMultipliers() {
    let ratesRes = await getRates(url);
    let multipliers = await calculateExchangeMultipliers(ratesRes.data.rates);
    return multipliers;
}

module.exports.getExchangeMultipliers = getExchangeMultipliers;