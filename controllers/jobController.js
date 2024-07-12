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

module.exports = { createNewJob };
