const path = require("path");
const router = require("express").Router();
const userRouter = require("./api/user");

// API Routes
router.use("/api/users", userRouter);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
