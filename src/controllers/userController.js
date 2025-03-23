const User = require("../models/User");

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get a single user
exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email, phone } = req.body;
  const newUser = new User({ name, email, phone });
  await newUser.save();
  res.status(201).json(newUser);
};




// Update a user
exports.updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
};

// Delete a user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
};
