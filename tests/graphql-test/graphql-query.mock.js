const wrongQuery = `
{
    transferTaxConsult() {
        _id
    }
}
`;

const validQuery = `
{
    transferTaxConsult(url: "https://www.smartmei.com.br")
    {
        description
        valueBRL
        valueUSD
        valueEUR
        date
    }
}
`;

module.exports = { validQuery, wrongQuery };
