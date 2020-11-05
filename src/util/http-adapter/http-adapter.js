const axios = require('axios');

// HTTP adapter for requests
module.exports = class HttpAdapter {
    get = async (url) => {
        let response = await axios(url);
        return {
            status: response.status,
            body: response.data
        }
    }
}


