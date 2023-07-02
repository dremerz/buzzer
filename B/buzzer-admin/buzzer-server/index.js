const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

app.use(cors());

let buzzers = [];
let state = false;
// respond with "hello world" when a GET request is made to the homepage
app.get("/buzzname", (req, res) => {
  res.send(buzzers[0]);
});

app.post("/buzz", jsonParser, (req, res) => {
  console.log("buzz", req.body, req.body.name);
  if (state == true) {
    console.log(req.body);
    buzzers.push(req.body.name);
    console.log(buzzers[0]);
    res.send(buzzers[0] == req.body.name);
  }
});

app.post("/getlatestbuzz", (req, res) => {
  res.send(buzzers[0]);
  console.log(buzzers);
});

app.post("/disablebuzzer", (req, res) => {
  console.log("disablong buzzer");
  buzzers = [];
  state = false;
});
app.post("/enablebuzzer", (req, res) => {
  buzzers = [];
  state = true;
  console.log("enabling buzzer");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
