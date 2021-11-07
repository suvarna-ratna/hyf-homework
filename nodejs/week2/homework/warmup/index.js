const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
app.get("/numbers/add", (req, res) => {
  const params = req.query;
  console.log(params);
  res.send(`${parseInt(params.first) + parseInt(params.second)}`);
});
app.get("/numbers/multiply", (req, res) =>{
const params = req.query;
  console.log(params);
res.send(`${parseInt(params.first) * parseInt(params.second)}`);
});
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
