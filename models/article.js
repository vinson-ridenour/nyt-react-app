const mongoose = require("mongoose");
// import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  url: String,
  date: Date,
  faved: {
    type: Boolean,
    default: false
  },
});

const Article = mongoose.model("Article", articleSchema);

// export default Article;
module.exports = Article;