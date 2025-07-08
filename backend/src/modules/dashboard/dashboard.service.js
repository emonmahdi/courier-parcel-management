const moment = require("moment");
const Parcel = require("../parcel/parcel.model");

const calculateMetrics = async () => {
  const todayStart = moment().startOf("date").toDate();
  const weekStart = moment().startOf("week").toDate();

  const [todayCount, weekCount, failedCount, codParcels] = await Promise.all([
    Parcel.countDocuments({ createdAt: { $gte: todayStart } }),
    Parcel.countDocuments({ createdAt: { $gte: weekStart } }),
    Parcel.countDocuments({ status: "Failed" }),
    Parcel.find({ isCOD: true, status: "Delivery" }),
  ]);

  const totalCODAmountDelivered = codParcels.reduce(
    (sum, p) => sum + (p.amount || 0),
    0
  );

  return {
    totalParcelsToday: todayCount,
    totalParcelsThisWeek: weekCount,
    failedDeliveries: failedCount,
    totalCODAmountDelivered,
  };
};

const DashboardService = {
  calculateMetrics,
};

module.exports = { DashboardService };
