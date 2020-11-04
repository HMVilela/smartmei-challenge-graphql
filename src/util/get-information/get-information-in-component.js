const cheerio = require('cheerio');

const getTaxValue = (taxTable, $) => {
    let taxValue;
    taxTable.each(function () {
        let value = $(this).find('div.text-center.col-sm-4.col-xs-6.tarifas-2-2-2').text();
        taxValue = value.trim().substring(3);
        taxValue = parseFloat(taxValue.replace(",", "."));
    });
    return taxValue
}

const getDescriptionText = (descriptionTable, $) => {
    let descriptionText;
    descriptionTable.each(function () {
        let value = $(this).find('div.col-sm-8.col-xs-12.cell-small-title').text();
        descriptionText = value.trim();
    });
    return descriptionText
}

exports.getInformation = (html) => {
    const $ = cheerio.load(html);
    const taxTable = $('#planos-e-tarifas > div > div > div > div > #tarifas-2 > div:nth-child(3)');
    const descriptionTable = $('#compare > div:nth-child(10)');

    const taxValue = getTaxValue(taxTable, $);
    const descriptionText = getDescriptionText(descriptionTable, $);

    return {
        tax: taxValue,
        description: descriptionText
    }
}