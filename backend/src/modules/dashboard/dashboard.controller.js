const { DashboardService } = require("./dashboard.service");

const getDashboardMetrics = async (req, res) => {
  try {
    const data = await DashboardService.calculateMetrics();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to load dashboard metrics" });
  }
};

const DashboardController = {
  getDashboardMetrics,
};

module.exports = { DashboardController };
