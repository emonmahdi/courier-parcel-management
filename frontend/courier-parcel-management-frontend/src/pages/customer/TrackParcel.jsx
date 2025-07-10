// src/pages/customer/TrackParcel.jsx
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const TrackParcel = () => {
  const { id } = useParams();
  const [parcel, setParcel] = useState(null);

  useEffect(() => {
    // TODO: Replace with API fetch
    setParcel({
      id,
      pickup: "Dhaka",
      delivery: "Barisal",
      status: "In Transit",
      currentLocation: "Gopalganj",
    });
  }, [id]);

  if (!parcel) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Track Parcel</h2>
      <div className="space-y-3">
        <p>
          <strong>Parcel ID:</strong> {parcel.id}
        </p>
        <p>
          <strong>Status:</strong> {parcel.status}
        </p>
        <p>
          <strong>Pickup:</strong> {parcel.pickup}
        </p>
        <p>
          <strong>Delivery:</strong> {parcel.delivery}
        </p>
        <p>
          <strong>Current Location:</strong> {parcel.currentLocation}
        </p>

        {/* Optional Google Maps integration */}
        <div className="mt-4">
          <iframe
            className="w-full h-64 rounded"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              parcel.currentLocation
            )}&output=embed`}
            allowFullScreen
            title="Parcel Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrackParcel;
