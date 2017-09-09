const express = require("express");
const path = require("path");

const apiRoutes = require("./apiRoutes");
const router = new express.Router();

// Use the apiRoutes module for any routes starting with "/api"
router.use("/api", apiRoutes);

// Otherwise send all other requests the index.html page
// React router will handle routing within the app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// module.exports = router;
module.exports = router;