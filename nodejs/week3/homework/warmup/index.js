const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/add", (req, res) => {
  const params = req.query;
  console.log(params);
  const valuecs = Object.values(params);
  let result = values.reduce((a, b) => parseInt(a) + parseInt(b));
  res.send(`${result}`);
});

app.get("/calculator/multiply", (req, res) => {
  const params = req.query;
  console.log(params);
  const values = Object.values(params);
  let result = values.reduce((a, b) => parseInt(a) * parseInt(b));
  res.send(`${result}`);
});
app.get("/numbers/subtraction", (req, res) => {
  const params = req.query;
  console.log(params);
  res.send(`${parseInt(params.first) - parseInt(params.second)}`);
});
app.get("/calculator/division", (req, res) => {
  const params = req.query;
  console.log(params);
  res.send(`${parseInt(params.first) / parseInt(params.second)}`);
});
app.post("/calculator/multiply", (req, res) => {
  const query = req.body;
  const keys = Object.values(query);

  console.log(query);
  console.log(keys);
  const result = keys.reduce((a, b) => parseInt(a) * parseInt(b));
  res.send(`Multiplication of given parameters is ${result}`);
});
app.post("/calculator/division", (req, res) => {
  const query = req.body;
  const keys = Object.values(query);
  res.send(`Division of given parameters is ${keys[0] / keys[1]}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
