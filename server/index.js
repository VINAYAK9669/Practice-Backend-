// TODO: 1]  Import Modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const jobRoute = require("./routes/jobRoute");

// TODO: 5] Import Custom Module [Routes]
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middlewares/errorHandler");

// TODO: 2] Create a instance of express and declare port
const app = express();
const PORT = 5000;

// TODO: 3] Listen to the server
app.listen(PORT, () => {
  console.log(`Server is running on the port : ${PORT}`);
});

// TODO: 4]  Connect to the MangoDB
// * i) Create a cluster
// * ii) Database >>  Browse collection >> Delete the prev data >>  create own data
// * iii) Go to Network Access >> Change the IP to current IP address

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connnected to mahgoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MagoDb");
  });

// Middleware to parse JSON bodies
app.use(express.json());

// TODO: 6] Use the defined routes
app.use("/user", userRoute);
app.use("/job", jobRoute);
app.use(errorHandler);
