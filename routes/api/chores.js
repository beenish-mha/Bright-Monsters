// const router = require("express").Router();
const router = require("express-promise-router")();
const choresController = require("../../controllers/choresController");

// Matches with "/api/chores"
router.route("/").get(choresController.findAll);

//matches with "/api/kids/:choresId"
router
  .route("/:choresId")
  .get(choresController.findchoresById)
  .delete(choresController.delete);

module.exports = router;
