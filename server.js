// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const routes = require("./routes/routes");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
const app = express();

const PORT = process.env.PORT || 3000;

// Use body parser with our app
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Make public a static dir
app.use(express.static("public"));
app.use("/", routes);

// Database configuration with mongoose
const db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Requiring routes in the routes folder
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Listen on PORT
app.listen(PORT, function() {
  console.log("App running on port 3000!");
});