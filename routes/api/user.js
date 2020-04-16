const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/").get(userController.findAll).post(userController.create);

// Matches with "/api/user/:email"
router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/:email/kid")
  .get(userController.getUserKids)
  .post(userController.newUserKid);

module.exports = router;
