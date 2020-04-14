const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolTasksSchema = new Schema({
  schoolTaskId: Number,
  task: String,
});

const choresSchema = new Schema({
  choresId: Number,
  chore: String,
});

const kidSchema = new Schema({
  name: String,
  age: Number,
  schoolTasks: [schoolTasksSchema],
  chores: [choresSchema],
  rewards: Number,
});

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  kids: [kidSchema],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
