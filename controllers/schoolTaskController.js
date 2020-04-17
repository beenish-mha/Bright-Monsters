const SchoolTask = require("../models/schoolTask");

module.exports = {
  findAll: async (req, res, next) => {
    const schoolTask = await SchoolTask.find({});
    res.status(200).json(schoolTask);
  },
  findschoolTaskById: async (req, res, next) => {
    const { schoolTaskId } = req.params;
    const schoolTask = await SchoolTask.findById(schoolTaskId);
    res.status(200).json(schoolTask);
  },
};
