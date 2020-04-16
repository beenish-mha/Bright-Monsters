const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 5000;
mongoose.Promise = global.Promise;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use(routes);

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://beenish:Beeproject3@cluster0-ncqma.mongodb.net/test?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log("MongooDB connected"))
  .catch((err) => console.log(err));

mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
