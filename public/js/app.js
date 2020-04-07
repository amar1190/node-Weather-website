const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    var location = search.value
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            //console.log("Error : ", data.error)
            messageOne.textContent = data.error 
        }
        else {
            // console.log("Location : ", data.location)
            // console.log("Forecast : ", data.forecast)
            // console.log("Address : ", data.address)
            messageOne.textContent = "Location is " + data.location
            var forecastData = data.forecast.summary + ". It is " + data.forecast.temperature + " degrees out. There is a " +
                data.forecast.precipitation + "% chance of rain."
            messageTwo.textContent = forecastData
        }
    })
})

})