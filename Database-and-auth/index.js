const express = require("express");

const app = express();

const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome user");
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
