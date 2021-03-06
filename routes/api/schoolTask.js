const router = require("express-promise-router")();
const schoolTaskController = require("../../controllers/schoolTaskController");

// Matches with "/api/schoolTask"
router.route("/").get(schoolTaskController.findAll);

//matches with "/api/schoolTask/:schoolTaskId"
router
  .route("/:schoolTaskId")
  .get(schoolTaskController.findschoolTaskById)
  .delete(schoolTaskController.deleteTaskById);

module.exports = router;
