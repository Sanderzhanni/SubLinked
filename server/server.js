const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const apiRouter = require("./apiRouter.js");
require("dotenv").config();

app.use(apiRouter);

/** For images and bundle.js */
app.use("/static", express.static("build/static"));

/** For index.html */
app.use("/*", express.static("build"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
