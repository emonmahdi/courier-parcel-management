const User = require("../user/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error("User already exists");
  }

  // password hashed
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });
  return {
    message: "User Registered",
    userId: user._id,
  };
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found!");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid Credentials");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET || "default_secret",
    {
      expiresIn: "1d",
    }
  );

  return {
    token,
    user: { id: user._id, name: user.name, role: user.role },
  };
};

const AuthService = { registerUser, loginUser };
module.exports = { AuthService };
