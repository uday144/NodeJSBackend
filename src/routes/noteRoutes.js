const express = require("express");
const noteRouter = express.Router();

noteRouter.get("/", (req, res) =>{
    res.send("Note Get request");
});

noteRouter.post("/", (req, res) =>{
    res.send("Note Post Request");
});

module.exports = noteRouter;