const User = require("../models/user");
const Kid = require("../models/kid");

module.exports = {
  findAll: async (req, res, next) => {
    const kid = await Kid.find({});
    res.status(200).json(kid);
  },

  findKidById: async (req, res, next) => {
    const { kidId } = req.params;
    const kid = await Kid.findById(kidId).populate("user");
    res.status(200).json(kid);
  },
};
