const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please enter an unique username"],
    unique: [true, "Username exists already"],
  },
  email: {
    type: String,
    required: [true, "Please enter an unique email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    unique: false,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  dob: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  profilePicture: {
    type: String,
  },
});

exports.User = mongoose.model("User", UserSchema);
