const express = require("express");
const { createNewJob } = require("../controllers/jobController");
const router = express.Router();

router.post("/add", createNewJob);

module.exports = router;
