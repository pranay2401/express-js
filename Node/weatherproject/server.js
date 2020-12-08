const express = require("express")
const https = require("https") // No need to install. It is native
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}))

app.post("/", function (req, resp) {
  const city = req.body.city
  if (city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=<api-key>`

    https.get(url, function(response) {
      console.log(response.statusCode)
      response.on("data", function(data) {
        dataJSON = JSON.parse(data)
        console.log(dataJSON);

        const temp = dataJSON.main.temp
        const weatherDescription = dataJSON.weather[0].description
        const iconCode = dataJSON.weather[0].icon
        const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

        // for multiple sending, we use write function
        resp.write("<h1>The weather condition at " + city + " is : " + weatherDescription + "<img src=" + iconURL + "></img>" + "</h1>")
        resp.write("The temperature is " + temp + " degree Celcius")
        resp.send()
      })
    })
  }
})

app.get("/", function(req, resp) {
  resp.sendFile(__dirname + "/index.html")
})

app.listen(3000, function() {
  console.log("Weather App running on port 3000");
})
