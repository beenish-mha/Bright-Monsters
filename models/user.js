const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  kids: [{ type: Schema.Types.ObjectId, ref: "kid" }],
});

const User = mongoose.model("user", userSchema);
module.exports = User;
