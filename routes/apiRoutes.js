const express = require("express");

const articleController = require('../controllers/articleController');

const router = new express.Router();

// Get all article (or optionally a specific article with an id)
router.get("/article/:id?", articleController.index);

// Create a new article using data passed in req.body
router.post("/article", articleController.create);

// Delete a specific article using the id in req.params.id
router.delete("/article/:id", articleController.destroy);

// Update an existing article with a specified id param, using data in req.body
// router.patch("/article/:id", articleController.update);

// module.exports = router;
module.exports = router;