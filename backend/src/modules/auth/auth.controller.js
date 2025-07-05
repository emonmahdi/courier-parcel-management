// const { registerUser } = "./auth.service.js";

const { AuthService } = require("./auth.service");

const register = async (req, res) => {
  try {
    const data = await AuthService.registerUser(req?.body);
    console.log(data);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const data = await AuthService.loginUser(req?.body);
    console.log(data);
    res.status(201).json(data);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const AuthController = {
  register,
  login,
};

module.exports = { AuthController };
