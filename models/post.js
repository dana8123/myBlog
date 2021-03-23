import mongoose from "mongoose";

const { Schema } = mongoose;
const postSchema = new Schema({
  createAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  },
  pwd: {
    type: String,

  },
  content: {
    type: String,

  }
}) 

module.exports = mongoose.model('Post', postSchema);