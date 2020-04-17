const router = require("express").Router();
const userRouter = require("./api/user");
const kidsRouter = require("./api/kids");

// API Routes
router.use("/api/users", userRouter);
router.use("/api/kids", kidsRouter);
router.use("/api/schoolTask", schoolTaskRouter);
router.use("/api/chores", choresRouter);

module.exports = router;
