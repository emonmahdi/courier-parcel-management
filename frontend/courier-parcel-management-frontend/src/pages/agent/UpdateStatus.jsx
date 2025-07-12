// src/pages/agent/UpdateStatus.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateStatus = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [parcel, setParcel] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchParcel = async () => {
    try {
      const res = await axios.get(`/api/parcels/${id}`);
      setParcel(res.data);
      setStatus(res.data.status);
    } catch (err) {
      toast.error("Failed to fetch parcel data");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/parcels/${id}/status`, { status });
      toast.success("Parcel status updated!");
      navigate("/agent/parcels");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  useEffect(() => {
    fetchParcel();
  }, [id]);

  const statusOptions = ["Picked Up", "In Transit", "Delivered", "Failed"];

  if (loading) return <p>Loading...</p>;
  if (!parcel) return <p>Parcel not found</p>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Update Parcel Status</h2>
      <p className="text-gray-600 mb-2">
        <strong>Customer:</strong> {parcel.customer?.name}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>From:</strong> {parcel.pickupAddress}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>To:</strong> {parcel.deliveryAddress}
      </p>

      <form onSubmit={handleUpdate} className="space-y-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border p-2 rounded"
        >
          {statusOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
        >
          Update Status
        </button>
      </form>
    </div>
  );
};

export default UpdateStatus;
