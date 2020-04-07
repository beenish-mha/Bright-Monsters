const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use(express.static("client/build"));

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/Bright-Monsters")
  .then(() => console.log("MongooDB connected"))
  .catch((err) => console.log(err));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
