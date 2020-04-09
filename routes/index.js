const router = require("express").Router();
const userRouter = require("./api/user");

// API Routes
router.use("/api/users", userRouter);

module.exports = router;
