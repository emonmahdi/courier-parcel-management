const express = require("express");
const { AuthController } = require("./auth.controller");
// const { AuthController } = require("./auth.controller");

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

// export const AuthRoutes = router;

const AuthRoutes = router;

module.exports = { AuthRoutes };
