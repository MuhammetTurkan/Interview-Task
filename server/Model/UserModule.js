const mongoose = require("mongoose");

const Shcema = mongoose.Schema;

const UserSchcema = new Shcema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    uniqe: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
  },
});

const User = mongoose.model("User", UserSchcema);

module.exports = User;
