const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const mongooseUniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  Name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  kids: [{ type: Schema.Types.ObjectId, ref: "Kids" }],
});
//Schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", userSchema);
