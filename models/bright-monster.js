const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kidSchema = new Schema({
  name: String,
  age: Number,
  schoolTasks: String,
  chores: String,
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
