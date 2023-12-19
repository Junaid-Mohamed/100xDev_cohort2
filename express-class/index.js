const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  {
    name: "Johny",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const noOfKidneys = johnKidneys.length;
  let noOfHealthyKidneys = johnKidneys.filter(
    (kid) => kid.healthy === true
  ).length;
  //   console.log(noOfHealthyKidneys);
  let noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    users,
  });
});

app.put("/", (req, res) => {
  users.map((user) => {
    user.kidneys.map((kid) => {
      kid.healthy = true;
    });
  });
  res.json({});
});

app.delete("/", (req, res) => {
  const newKidneys = [];
  users.map((user) => {
    user.kidneys.filter((kid) => {
      if (kid.healthy) newKidneys.push(kid);
    });
    user.kidneys = newKidneys;
  });
  //   let newKidneys = johnKidneys.filter((kid) => kid.healthy === true);
  //   console.log(newKidneys);
  res.json({ msg: "done" });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
