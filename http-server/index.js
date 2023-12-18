const express = require("express");
const app = express();

const port = 3001;

app.get("/home", (req, res) => {
  res.send("welcome to the home page");
});

app.listen(port, () => {
  console.log("listening on port ", port);
});
