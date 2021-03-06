const Kid = require("../models/kid");
const SchoolTask = require("../models/schoolTask");
const Chore = require("../models/chore");

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

  newkidSchoolWork: async (req, res, next) => {
    const { kidId } = req.params;
    const newSchoolTask = new SchoolTask(req.body);
    const kid = await Kid.findById(kidId);
    newSchoolTask.kid = kid;
    await newSchoolTask.save();
    kid.schoolTasks.push(newSchoolTask);
    await kid.save();
    res.status(201).json(newSchoolTask);
  },

  getkidSchoolWork: async (req, res, next) => {
    const { kidId } = req.params;
    const kid = await Kid.findById(kidId).populate("schoolTasks");
    res.status(200).json(kid.schoolTasks);
  },

  newkidChores: async (req, res, next) => {
    const { kidId } = req.params;
    const newChore = new Chore(req.body);
    const kid = await Kid.findById(kidId);
    newChore.kid = kid;
    await newChore.save();
    kid.chores.push(newChore);
    await kid.save();
    res.status(201).json(newChore);
  },

  getkidChores: async (req, res, next) => {
    const { kidId } = req.params;
    const kid = await Kid.findById(kidId).populate("chores");
    res.status(200).json(kid.chores);
  },
};
