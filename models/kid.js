const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kidSchema = new Schema({
  Name: { type: String, required: true },
  age: { type: Number },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  schoolTasks: [{ type: Schema.Types.ObjectId, ref: "SchoolTask" }],
  chores: [{ type: Schema.Types.ObjectId, ref: "Chore" }],
});

const Kid = mongoose.model("kid", kidSchema);
module.exports = Kid;
