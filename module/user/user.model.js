const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is mandatory"] },
  email: { type: String, required: [true, "Email is mandatory"], unique: true },
  password: { type: String, required: [true, "Password is mandatory"] },
  phoneNumber: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const userModel = new mongoose.model("User", userSchema);

module.exports = userModel;
