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

  },
}) 


const model = mongoose.model("Post", postSchema);
  
export default model;