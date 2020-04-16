const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/").get(userController.findAll).post(userController.create);

//match with "/api/user/:email/child/:name"
router.route("api/users/:email/child/:name").put(userController.updateKids);

// Matches with "/api/user/:email"
router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
