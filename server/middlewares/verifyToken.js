const jwt = require("jsonwebtoken");

const dotenv = require("dotenv").config();

const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Token Not Found or InValid",
      });
    }
    const decoded = jwt.verify(token, process.env.PRIVATE_SIGN_KEY);
    // req.refUserId = decoded.userID;
    console.log(decoded);
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token Not Found or Invalid",
    });
  }
};

module.exports = verifyToken;
