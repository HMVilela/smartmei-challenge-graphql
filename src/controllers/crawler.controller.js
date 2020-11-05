const HttpAdapter = require('../util/http-adapter/http-adapter');
const giic = require('../util/get-information/get-information-in-component');

// Get HTML page for crawler and pass to giic.GetInformatio() to extract data
exports.getTransferTax = async (url) => {
    let remoteData = await new HttpAdapter().get(url);
    const html = remoteData.body;
    return giic.getInformation(html);          
}
