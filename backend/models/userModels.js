const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    max: 50,
    min: [4, "username should contain at least 4 characters!"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    min: [4, "email should contain at least 4 characters!"],
    trim: true,
  },
  password: {
    type: String,
    required: true,
    max: 50,
    min: [4, "password should contain at least 4 characters!"],
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    max: 10,
    min: [10, "mobile number should not exceed 10"],
  },
  joiningas: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
