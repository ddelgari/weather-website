const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/01f8edfa8fd23b60143a0f43531d20ed/' +  encodeURI(lat) + ',' + encodeURI(long)    

    request({ url, json: true }, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather service !', undefined)
    } else if (body.error) {
        callback('Unable to find location !', undefined)
    } 
    else {
             callback(undefined, { 
                summary:  body.daily.data[0].summary,
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability,
                temperatureLow: body.daily.data[0].temperatureLow,
                temperatureHigh: body.daily.data[0].temperatureHigh
            })
        }
    }) 

}

module.exports = forecast