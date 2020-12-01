const express = require("express");
const router = express.Router();
const dataRouter = require("./data.router.js");
const emailRouter = require("./email.router.js");

router.use("/api/v1/data", dataRouter);
router.use("/api/v1/email", emailRouter);

module.exports = router;
