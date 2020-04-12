const User = require("../models/bright-monster");

// Defining methods for the userController
module.exports = {
  findAll: function (req, res) {
    User.find(req.query)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    User.findOne({ email: req.params.email })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    User.create(req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  // update: function (req, res) {
  //   User.findOneAndUpdate({ email: req.params.email }, req.body)
  //     .then((dbUser) => res.json(dbUser))
  //     .catch((err) => res.status(422).json(err));
  // },

  update: function (req, res) {
    User.findOneAndUpdate(
      { email: req.params.email },
      { $push: { kids: { name: "Abdul H", age: "10" } } }
    )
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    User.findOne({ email: req.params.email })
      .then((dbUser) => dbUser.remove())
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
};
