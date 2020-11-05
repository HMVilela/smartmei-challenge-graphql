const formatExchangeMultipliers = async (rates) => {
    let factors = {
        EUR: parseFloat(rates.EUR),
        USD: parseFloat(rates.USD)    
    }
    return factors;
}

// Receive response of Exchange Rates API and return object with formatted data
exports.getExchangeMultipliers = async (rates) => {
    let multipliers = await formatExchangeMultipliers(rates.rates);
    return multipliers;
}