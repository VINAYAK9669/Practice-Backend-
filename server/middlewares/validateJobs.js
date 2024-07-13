const validateJobs = (req, res, next) => {
  // read from client
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
  } = req.body;

  // Check if all required fields are present
  if (!companyName) {
    return res.status(400).json({
      message: "Company name is required",
    });
  }

  if (!logoURL) {
    return res.status(400).json({
      message: "Logo URL is required",
    });
  }

  if (!jobTitle) {
    return res.status(400).json({
      message: "Job title is required",
    });
  }

  if (!monthlySalary) {
    return res.status(400).json({
      message: "Monthly salary is required",
    });
  }

  if (!jobType) {
    return res.status(400).json({
      message: "Job type is required",
    });
  }

  if (typeof remote !== "boolean") {
    return res.status(400).json({
      message: "Remote must be a boolean value",
    });
  }

  if (!location) {
    return res.status(400).json({
      message: "Location is required",
    });
  }

  if (!jobDescription) {
    return res.status(400).json({
      message: "Job description is required",
    });
  }

  if (!aboutCompany) {
    return res.status(400).json({
      message: "About company is required",
    });
  }

  if (!skillsRequired) {
    return res.status(400).json({
      message: "Skills required is required",
    });
  }
  const isValidSkillArray =
    Array.isArray(skillsRequired) &&
    skillsRequired.length > 0 &&
    skillsRequired?.every((skill) => typeof skill === "string");

  if (!isValidSkillArray) {
    return res.status(400).json({
      message: "Skills required must be an array of strings",
    });
  }

  // Validate the logo URL
  const image_url_pattern = new RegExp(
    "^(https?:\\/\\/)" + // URL scheme (http or https)
      "([\\da-z.-]+)\\.([a-z.]{2,6})" + // Domain name and extension
      "([\\/\\w .-]*)*" + // Path
      "(\\?.*)?$" // Query string (optional)
  );

  function isValidImageUrl(url) {
    return image_url_pattern.test(url);
  }

  if (!isValidImageUrl(logoURL)) {
    return res.status(400).json({
      message: "Logo URL must be a valid URL",
    });
  }
  next();
};

module.exports = validateJobs;
