require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT;
mongoose.Promise = global.Promise;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use(routes);

mongoose
  .connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongooDB connected"))
  .catch((err) => console.log(err));

mongoose.set("useCreateIndex", true);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
