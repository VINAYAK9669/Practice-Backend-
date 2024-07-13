const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    logoURL: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    monthlySalary: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Remote"],
      required: true,
    },
    remote: {
      type: Boolean,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    aboutCompany: {
      type: String,
      required: true,
    },
    skillsRequired: [
      {
        type: String,
        required: true,
      },
    ],
    additionalInformation: {
      type: String,
    },
    refUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User collection
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
