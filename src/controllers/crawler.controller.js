const HttpAdapter = require('../util/http-adapter/http-adapter');
const giic = require('../util/get-information/get-information-in-component');

exports.getTransferTax = async (url) => {
    let remoteData = await new HttpAdapter().get(url);
    const html = remoteData.body;
    return giic.getInformation(html);          
}
