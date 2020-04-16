// const router = require("express").Router();
const router = require("express-promise-router")();
const kidsController = require("../../controllers/kidsController");

// Matches with "/api/kids"
router.route("/").get(kidsController.findAll);

//matches with "/api/kids/:kidId"
router.route("/:kidId").get(kidsController.findKidById);

//match with "/api/kids/:kidsId/schoolWork"
router
  .route("/:kidId/schoolWork")
  .get(kidsController.getkidSchoolWork)
  .post(kidsController.newkidSchoolWork);

// //match with "/api/kids/:kidsId/chores"
// router
//   .route("/:kidId/chores")
//   .get(userController.getkidChores)
//   .post(userController.newkidChores);

module.exports = router;
