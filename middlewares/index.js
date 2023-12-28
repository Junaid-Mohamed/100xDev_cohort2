const express = require("express");

const app = express();
const PORT = 3001;

function isOldEnoughMiddleware(req, res, next) {
  console.log(req.query);
  if (req.path === "/ride1" || req.path === "/ride2") {
    let age = parseInt(req.query.age, 10);
    if (!isNaN(age) && age >= 14) {
      next();
    } else {
      res.status(403).json("age is not enough to go to this ride.");
    }
  } else {
    next();
  }
}

app.use(isOldEnoughMiddleware);
app.get("/ride1", (req, res) => {
  res.status(200).json("You can go for the ride.");
});

app.get("/ride2", (req, res) => {
  res.status(200).json("You can go for the ride.");
});

app.use("*", (req, res) => {
  res.status(404).json("Page not found.");
});

app.listen(PORT, () => console.log("app listening on port", PORT));
