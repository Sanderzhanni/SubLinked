const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const apiRouter = require("./apiRouter.js");
const path = require("path");
require("dotenv").config();

app.use(apiRouter);

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// For index.html
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
