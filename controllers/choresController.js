const Chore = require("../models/chore");

module.exports = {
  findAll: async (req, res, next) => {
    const chore = await Chore.find({});
    res.status(200).json(chore);
  },
  findChoreById: async (req, res, next) => {
    const { choreId } = req.params;
    const chore = await Chore.findById(choreId);
    res.status(200).json(chore);
  },
  deleteChoreById: async (req, res, next) => {
    const { choreId } = req.params;
    SchoolTask.findById({ _id: choreId }).then((result) =>
      result
        .remove()
        .then((result) => res.json(result))
        .catch((err) => res.status(422).json(err))
    );
  },
};
