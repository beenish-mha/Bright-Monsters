const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolTaskSchema = new Schema({
  task: { type: String },
  kid: { type: Schema.Types.ObjectId, ref: "kid" },
});

const SchoolTask = mongoose.model("schoolTask", schoolTaskSchema);
module.exports = SchoolTask;
