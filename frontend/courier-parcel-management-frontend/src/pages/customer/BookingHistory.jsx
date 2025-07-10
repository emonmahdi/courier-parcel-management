// src/pages/customer/BookingHistory.jsx
import { useEffect, useState } from "react";

const dummyBookings = [
  {
    id: "P12345",
    pickup: "Dhaka",
    delivery: "Barisal",
    status: "In Transit",
    date: "2025-07-09",
  },
  {
    id: "P67890",
    pickup: "Khulna",
    delivery: "Chittagong",
    status: "Delivered",
    date: "2025-07-08",
  },
];

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // TODO: Replace with API call
    setBookings(dummyBookings);
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Booking History
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4">Parcel ID</th>
              <th className="py-2 px-4">Pickup</th>
              <th className="py-2 px-4">Delivery</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.pickup}</td>
                <td className="py-2 px-4">{item.delivery}</td>
                <td className="py-2 px-4">{item.status}</td>
                <td className="py-2 px-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingHistory;
