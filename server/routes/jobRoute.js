const express = require("express");
const {
  createNewJob,
  getJobById,
  updateJob,
  deleteJobById,
} = require("../controllers/jobController");
const verifyToken = require("../middlewares/verifyToken");
const validateJobs = require("../middlewares/validateJobs");
const router = express.Router();

router.post("/add", verifyToken, validateJobs, createNewJob);
router.get("/:id", verifyToken, getJobById);
router.put("/:id", verifyToken, validateJobs, updateJob);
router.delete("/:id", verifyToken, deleteJobById());

module.exports = router;
