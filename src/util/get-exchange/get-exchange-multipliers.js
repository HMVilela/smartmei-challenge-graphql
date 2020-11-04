const formatExchangeMultipliers = async (rates) => {
    let factors = {
        EUR: parseFloat(rates.EUR),
        USD: parseFloat(rates.USD)    
    }
    return factors;
}

exports.getExchangeMultipliers = async (rates) => {
    let multipliers = await formatExchangeMultipliers(rates.rates);
    return multipliers;
}