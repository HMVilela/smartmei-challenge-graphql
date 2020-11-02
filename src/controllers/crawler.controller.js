const axios = require('axios');
const cheerio = require('cheerio');

async function fetchData(url){
    console.log("Crawling remote data...");
    let response = await axios(url).catch((err) => console.log(err));

    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}

async function getTransferTax(url) {
    let taxValue;
    let remoteData = await fetchData(url);    
    console.log("Getting transfer tax data...");
    const html = remoteData.data;
    const $ = cheerio.load(html);
    const taxTable = $('#planos-e-tarifas > div > div > div > div > #tarifas-2 > div:nth-child(3)');
    const descriptionTable = $('#compare > div:nth-child(10)');
    taxTable.each(function() {
        value = $(this).find('div.text-center.col-sm-4.col-xs-6.tarifas-2-2-2').text();
        taxValue = value.trim().substring(3);
        taxValue = parseFloat(taxValue.replace(",", "."));
    });  
    descriptionTable.each(function() {
        value = $(this).find('div.col-sm-8.col-xs-12.cell-small-title').text();
        descriptionText = value.trim();
    });        
    return {
        tax: taxValue,
        description: descriptionText
    }
}

module.exports.getTransferTax = getTransferTax;