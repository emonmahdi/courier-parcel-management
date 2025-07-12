// src/pages/admin/ManageBookings.jsx
import { useEffect, useState } from "react";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // TODO: API call to fetch bookings
    setBookings([
      { id: "P123", customer: "Hasan", status: "In Transit", amount: 350 },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Bookings</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">Parcel ID</th>
            <th className="py-2 px-4">Customer</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Amount</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-t">
              <td className="py-2 px-4">{b.id}</td>
              <td className="py-2 px-4">{b.customer}</td>
              <td className="py-2 px-4">{b.status}</td>
              <td className="py-2 px-4">৳ {b.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookings;
