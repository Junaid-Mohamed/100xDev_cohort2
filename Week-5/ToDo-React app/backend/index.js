const express = require("express");
const app = express();
const port = 3001;
app.use(express.json());
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/todo", async (req, res) => {
  console.log("reached post request.");
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      message: "you sent the wrong input.",
    });
  }
  // put in db
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo Created",
  });
});

app.get("/todos", async (req, res) => {
  console.log("todos getting called");
  const todos = await todo.find();
  res.json(todos);
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parseUpdatedPayload = updateTodo.safeParse(updatePayload);
  if (!parseUpdatedPayload) {
    res.status(411).json({
      message: "you sent the wrong input",
    });
  }
  await todo.updateOne(
    { _id: req.body.id }, // Filter criteria
    { $set: { completed: true } }
  );
});

app.listen(port, () => console.log("listening on port", port));
