// const router = require("express").Router();
const router = require("express-promise-router")();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/").get(userController.findAll).post(userController.create);

//matches with "/api/user/:userId"
router.route("/:userId").get(userController.findUserById);

// Matches with "/api/user/:email"
router.route("/:email").get(userController.findByEmail);
// .put(userController.update)
// .delete(userController.remove);

router
  .route("/:userId/kids")
  .get(userController.getUserKids)
  .post(userController.newUserKid);

module.exports = router;
