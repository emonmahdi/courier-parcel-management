const express = require('express');
const { verifyToken, restrictTo } = require('../../middlewares/verifyToken');
const { DashboardController } = require('./dashboard.controller');

const router = express.Router();

// Admin-only access
router.get('/metrics', verifyToken, restrictTo('admin'), DashboardController.getDashboardMetrics);

const DashboardRoutes = router;

module.exports = { DashboardRoutes };