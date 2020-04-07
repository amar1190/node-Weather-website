const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/bcd77e6400898186f0c016ec5cbee70d/' + latitude + ',' + longitude + '?units=si'
    
    request({ url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                precipitation: body.currently.precipProbability,
                summary: body.daily.data[0].summary,
                temperatureHigh : body.daily.data[0].temperatureHigh,
                temperatureLow : body.daily.data[0].temperatureLow
            })
        }
    })
}

module.exports = forecast