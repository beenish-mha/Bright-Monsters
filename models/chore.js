const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choreSchema = new Schema({
  chore: { type: String },
  kid: { type: Schema.Types.ObjectId, ref: "Kid" },
});

module.exports = mongoose.model("Chore", choreSchema);
