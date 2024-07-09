// TODO: 1]  Import modules
const express = require("express");
const router = express.Router(); //! What we are exactly creating?

// TODO: 2]

router.get("/health", (req, res) => {
  res.json({
    message: "User Route is working fine",
    status: "Working",
  });
});

module.exports = router;
