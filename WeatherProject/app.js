const express = require("express");
const https = require("https");

const app = new express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

const weatherGetRequest = {
    hostname: "api.weather.gov",
    path: "/stations/KGRB/observations/latest",
    headers: { 'User-Agent': 'Contact Email: samuelcmace@gmail.com' }
};

app.get("/", (req, res) => {
    
    https.get(weatherGetRequest, (weatherGetResponse) => {

        if(weatherGetResponse.statusCode == 200) {
            weatherGetResponse.on("data", (data) => {
                const weatherData = JSON.parse(data);
                res.send("The temperature in Green Bay, Wisconsin is " + String(weatherData.properties.temperature.value) + "&deg; C");
            });
        }

        else {
            res.send("<img src='https://httpstatusdogs.com/img/" + response.statusCode + ".jpg'>");
        }
    });
});

app.listen(port, (req, res) => {
    console.log("The server is listening on port " + port + ".");
});
