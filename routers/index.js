const express = require("express");
const router = express.Router();
const userRouter = require("./user.router");

router.get("/", (req, res) => {
  res.status(200).json("hallo ini dari express");
});

router.use("/user", userRouter);

module.exports = router;
