const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kidSchema = new Schema({
  Name: { type: String, required: true },
  age: { type: Number },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  schoolTasks: [{ type: Schema.Types.ObjectId, ref: "SchoolTask" }],
  chores: [{ type: Schema.Types.ObjectId, ref: "Chores" }],
});

module.exports = mongoose.model("Kid", kidSchema);
