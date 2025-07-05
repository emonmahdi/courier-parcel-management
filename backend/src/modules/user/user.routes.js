const express = require("express");
const { verifyToken } = require("../../middlewares/verifyToken");
const { UserController } = require("./user.controller");

const router = express.Router();

router.get("/profile", verifyToken, UserController.getProfile);

const UserRoutes = router;

module.exports = { UserRoutes };
