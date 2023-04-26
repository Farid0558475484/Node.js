const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  res.send("Hello User!");
});

app.post("/user", (req, res) => {
  res.send("Created Users!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
