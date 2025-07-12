// src/pages/admin/AdminDashboard.jsx
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [metrics, setMetrics] = useState({
    totalBookings: 0,
    failedDeliveries: 0,
    codAmount: 0,
  });

  useEffect(() => {
    // TODO: Fetch from API
    setMetrics({ totalBookings: 125, failedDeliveries: 5, codAmount: 3570 });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h4 className="text-lg">Total Bookings</h4>
          <p className="text-3xl font-bold">{metrics.totalBookings}</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow">
          <h4 className="text-lg">Failed Deliveries</h4>
          <p className="text-3xl font-bold">{metrics.failedDeliveries}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h4 className="text-lg">COD Collected</h4>
          <p className="text-3xl font-bold">৳ {metrics.codAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
