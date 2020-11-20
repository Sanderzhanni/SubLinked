const express = require("express");
const router = express.Router();
const dataRouter = require("./data.router.js");

router.use("/api/v1/data", dataRouter);

module.exports = router;
