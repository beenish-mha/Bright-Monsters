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
  deleteTaskById: async (req, res, next) => {
    const { schoolTaskId } = req.params;
    SchoolTask.findById({ _id: schoolTaskId }).then((result) =>
      result
        .remove()
        .then((result) => res.json(result))
        .catch((err) => res.status(422).json(err))
    );
  },
};
