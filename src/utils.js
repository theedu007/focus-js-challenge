const https = require('https');

module.exports.getData = url => {
    let apiData = '';
    return new Promise((resolve, reject) => {
        https.get(url, apiResponse => {
            apiResponse.on('data', incoming =>{
                apiData += incoming;
            })
            apiResponse.on('end', () => 
            {
                resolve(JSON.parse(apiData));
            });
        });
    })
}

module.exports.getUnparsedData = url => {
    let apiData = '';
    return new Promise((resolve, reject) => {
        https.get(url, apiResponse => {
            apiResponse.on('data', incoming =>{
                apiData += incoming;
            })
            apiResponse.on('end', () => 
            {
                resolve(apiData);
            });
        });
    })
}
