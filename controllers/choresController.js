const Chore = require("../models/chore");

module.exports = {
  findAll: async (req, res, next) => {
    const chore = await Chore.find({});
    res.status(200).json(chore);
  },
  findschoolTaskById: async (req, res, next) => {
    const { choreId } = req.params;
    const chore = await Chore.findById(choreId);
    res.status(200).json(chore);
  },
};
