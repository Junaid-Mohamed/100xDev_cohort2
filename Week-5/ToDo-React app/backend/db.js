const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Junaid:4n7szfUVQLhqE4jy@cluster0.yswgdkp.mongodb.net/todo-app"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
