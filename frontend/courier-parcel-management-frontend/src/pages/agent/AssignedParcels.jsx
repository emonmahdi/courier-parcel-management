// src/pages/agent/AssignedParcels.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router";
// import axios from "axios"; // Uncomment this later when using real API

const AssignedParcels = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy data (for initial UI test/demo)
  const dummyParcels = [
    {
      _id: "1",
      customer: { name: "John Doe" },
      pickupAddress: "123 Main Street",
      deliveryAddress: "456 Elm Street",
      status: "Assigned",
    },
    {
      _id: "2",
      customer: { name: "Jane Smith" },
      pickupAddress: "99 Ocean Ave",
      deliveryAddress: "11 Hill Road",
      status: "Picked Up",
    },
  ];

  const fetchParcels = async () => {
    try {
      // ❌ Real API call (use later)
      // const response = await axios.get("/api/parcels/assigned", {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      // });
      // setParcels(response.data);

      // ✅ Dummy Data (use for now)
      setParcels(dummyParcels);
    } catch (error) {
      console.error("Failed to fetch parcels", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParcels();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Assigned Parcels</h2>

      {loading ? (
        <p>Loading...</p>
      ) : parcels.length === 0 ? (
        <p>No assigned parcels yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-sm text-gray-700">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Pickup Address</th>
                <th className="p-3">Delivery Address</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel, index) => (
                <tr key={parcel._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{parcel.customer?.name}</td>
                  <td className="p-3">{parcel.pickupAddress}</td>
                  <td className="p-3">{parcel.deliveryAddress}</td>
                  <td className="p-3">{parcel.status}</td>
                  <td className="p-3">
                    <Link
                      to={`/agent/update/${parcel._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AssignedParcels;
