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

  //find user by userId
  findUserById: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("kids");
    res.status(200).json(user);
  },

  //find user by email
  findByEmail: async (req, res, next) => {
    const { email } = req.params;
    const user = await User.findOne({ email: email }).populate("kids");
    res.status(200).json(user);
  },

  //post new kid by userId
  newUserKid: async (req, res, next) => {
    const { userId } = req.params;
    const newKid = new Kid(req.body);
    const user = await User.findById(userId);
    newKid.user = user;
    await newKid.save();
    user.kids.push(newKid);
    await user.save();
    res.status(201).json(newKid);
  },

  //getUser Kids by userid
  getUserKids: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("kids");
    console.log("user", user);
    res.status(200).json(user.kids);
  },

  // remove: function (req, res) {
  //   User.findOne({ email: req.params.email })
  //     .then((dbUser) => dbUser.remove())
  //     .then((dbUser) => res.json(dbUser))
  //     .catch((err) => res.status(422).json(err));
  // },
};
