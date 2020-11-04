const axios = require('axios');

module.exports = class HttpAdapter {
    get = async (url) => {
        let response = await axios(url);
        return {
            status: response.status,
            body: response.data
        }
    }
}


