const User = require("../models/bright-monster");

// Defining methods for the userController
module.exports = {
  findAll: function (req, res) {
    User.find(req.query)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },

  //find the right kid with user email

  findKid: function (req, res) {
    User.findOne({ email: req.params.name })
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

  update: function (req, res) {
    User.updateOne(
      { email: req.body.email },
      {
        $push: {
          kids: [{ name: req.body.name, age: req.body.age }],
        },
      }
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
