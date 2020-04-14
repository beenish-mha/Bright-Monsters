const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/").get(userController.findAll).post(userController.create);

router.route("/:email/:name").get(userController.findKid);

// Matches with "/api/user/:email"
router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
