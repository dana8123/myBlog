import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema({
  userName: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
  }
});

const model = mongoose.model("User", userSchema);
  
export default model;