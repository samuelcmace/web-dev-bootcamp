const express = require("express");
const path = require("path");

const port = 3000;

const app = new express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "bmiCalculator.html"));
});

app.post("/bmicalculator", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmi = (weight / Math.pow(height, 2));

  res.send("Your BMI is " + bmi);

  console.log("The user's BMI is " + bmi);
});

app.listen(port, () => {
  console.log("The server is listening on port " + port);
});
