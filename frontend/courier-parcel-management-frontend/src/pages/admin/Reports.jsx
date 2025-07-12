// src/pages/admin/Reports.jsx
import { useState } from "react";

const Reports = () => {
  const [reportData] = useState([
    { id: "P1", status: "Delivered", amount: 500 },
    { id: "P2", status: "Failed", amount: 0 },
  ]);

  const downloadCSV = () => {
    const csv = reportData.map((r) => `${r.id},${r.status},${r.amount}`).join("\n");
    const blob = new Blob(["Parcel ID,Status,Amount\n" + csv], {
      type: "text/csv",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report.csv";
    a.click();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Export Reports</h2>
      <button
        onClick={downloadCSV}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Download CSV
      </button>
    </div>
  );
};

export default Reports;
