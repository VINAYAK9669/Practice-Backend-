const Job = require("../model/Job");
const mongoose = require("mongoose");
const createNewJob = async (req, res, next) => {
  const {
    companyName,
    logoURL,
    jobTitle,
    monthlySalary,
    jobType,
    remote,
    location,
    jobDescription,
    aboutCompany,
    skillsRequired,
    additionalInformation,
    author,
  } = req.body;

  const newJob = new Job({
    companyName,
    logoURL,
    jobTitle,
    monthlySalary,
    jobType,
    remote,
    location,
    jobDescription,
    aboutCompany,
    skillsRequired,
    additionalInformation,
  });
  try {
    await newJob.save();
    res.status(201).json({
      message: "Job added successfully",
      status: "Working",
      job: newJob._id,
    });
  } catch (error) {
    next(error);
  }
};

const getJobById = async (req, res, next) => {
  try {
    const jobId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({ message: "Invalid job ID" });
    }

    const job = await Job.findById(jobId);

    // Check if the job was found
    if (job) {
      return res.status(200).json({
        message: "Job Found",
        job: job,
      });
    } else {
      return res.status(404).json({
        message: "Job not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateJob = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const updates = req.body;

    // Check if the provided job ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({ message: "Invalid job ID" });
    }

    // Update the job by ID
    const updatedJob = await Job.findByIdAndUpdate(jobId, updates, {
      new: true,
      runValidators: true,
    });

    // Check if the job was found and updated
    if (updatedJob) {
      return res.status(200).json({
        message: "Job updated successfully",
        job: updatedJob,
      });
    } else {
      return res.status(404).json({
        message: "Job not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

function deleteJobById() {
  return async (req, res, next) => {
    try {
      const jobId = req.params.id;

      // Check if the provided job ID is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ message: "Invalid job ID" });
      }
      // Delete the job by ID
      const deletedJob = await Job.findByIdAndDelete(jobId);

      // Check if the job was found and deleted
      if (deletedJob) {
        return res.status(200).json({
          message: "Job deleted successfully",
          job: deletedJob,
        });
      } else {
        return res.status(404).json({
          message: "Job not found",
        });
      }
    } catch (error) {
      // Pass any errors to the error handling middleware
      next(error);
    }
  };
}

module.exports = { createNewJob, getJobById, updateJob, deleteJobById };
