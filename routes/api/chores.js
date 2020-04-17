const router = require("express-promise-router")();
const choresController = require("../../controllers/choresController");

// Matches with "/api/chores"
router.route("/").get(choresController.findAll);

//matches with "/api/chores/:choresId"
router
  .route("/:choresId")
  .get(choresController.findchoreById)
  .delete(choresController.deleteChoreById);

module.exports = router;
