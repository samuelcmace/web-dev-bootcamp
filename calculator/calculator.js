const express = require("express");
const bodyParser = require("body-parser");

const app = new express();
const port = 3000;

const path = require("path");

app.use(bodyParser.urlencoded({extended: true}));

app.use("/css", express.static(path.join(__dirname, 'frontend/css')));
app.use("/js", express.static(path.join(__dirname, 'frontend/js')));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "frontend/index.html"));
});

app.post("/", function(req, res){
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);

  res.send("The result of the addition operation is " + (num1 + num2));
});

app.listen(port, () => {
  console.log("App listening on port " + port);
});
