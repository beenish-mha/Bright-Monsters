const User = require("../models/user");
const Kid = require("../models/kid");

// Defining methods for the userController
module.exports = {
  findAll: async (req, res, next) => {
    const user = await User.find({});
    res.status(200).json(user);
  },

  //creating new user
  create: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(201).json(user);
  },

  //find user by email
  findByEmail: async (req, res, next) => {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    res.status(200).json(user);
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

  updateKids: function (req, res) {
    User.findOneAndUpdate(
      {
        email: req.params.email,
        kids$name: req.params.name,
      },
      { $set: { "kids.$.schoolTasks": req.body.task } }
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
