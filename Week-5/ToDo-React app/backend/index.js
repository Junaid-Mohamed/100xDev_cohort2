const express = require("express");
const app = express();
const port = 3001;
app.use(express.json());
const { createTodo, updateTodo } = require("./types");

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      message: "you sent the wrong input.",
    });
  }
  // put in db
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parseUpdatedPayload = updateTodo.safeParse(updatePayload);
  if (!parseUpdatedPayload) {
    res.status(411).json({
      message: "you sent the wrong input",
    });
  }
});

app.listen(port, () => console.log("listening on port"));
