const userModel = require("./user.model");
const { encryption, decryption } = require("../../utils/bcrypt");
const { mailer } = require("../../services/mailer");
const { token } = require("../../utils/token");

const createUser = async (payload) => {
  // const
  const { email, password } = await payload;
  console.log(payload);
  if (!email || !password)
    throw new Error("Please enter both username and password");
  const hashedPass = encryption(password);
  console.log(hashedPass);
  payload.password = hashedPass;
  const user = await userModel.create(payload);
  if (!user) throw new Error(" Regsitration Failed");
  const res = await mailer(email);
  if (!res) throw new Error("Registration failed");
  return "You have successfully registered into the system, CONGRATULATIONS!!";
};

const getAllUsers = () => {
  return userModel.find();
};

const getUserById = (_id) => {
  return userModel.findOne({ _id });
};

const updateUser = (_id, payload) => {
  return userModel.updateOne({ _id }, payload);
};

const deleteUser = (_id) => {
  return userModel.deleteOne({ _id });
};
const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password)
    throw new Error("Username and Password are mandatory");

  const user = await userModel.findOne({ email }).select("+password");
  if (!user) throw new Error("Please enter valid username");
  const { password: hashPassword } = user;
  const comparision = await decryption(password, hashPassword);
  if (!comparision) throw new Error("login failed");
  const userPayload = { name: user.name, email: user.email, role: user.role };
  const generatedToken = await token(userPayload);
  return generatedToken;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
};
