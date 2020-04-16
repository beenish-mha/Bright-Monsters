const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schoolTasksSchema = new Schema({
  task: { type: String },
  kid: { type: Schema.Types.ObjectId, ref: "Kid" },
});

module.exports = mongoose.model("SchoolTask", schoolTasksSchema);
