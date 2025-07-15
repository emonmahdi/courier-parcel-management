import { useGetAllParcelsQuery } from "../../redux/features/parcel/parcelApi";

const ManageBookings = () => {
  const {
    data: bookings = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllParcelsQuery(undefined, {
    refetchOnMountOrArgChange: true, // 🔄 ensures fresh data
  });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        📦 All Bookings
      </h2>

      {isLoading && (
        <p className="text-center text-blue-500 font-medium">
          Loading bookings...
        </p>
      )}

      {isError && (
        <p className="text-center text-red-500 font-medium">
          ❌ {error?.data?.message || "Failed to load bookings."}
        </p>
      )}

      {!isLoading && bookings.length === 0 && (
        <p className="text-center text-gray-600">No bookings found.</p>
      )}

      {bookings.length > 0 && (
        <>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Parcel ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {bookings.map((b) => (
                  <tr
                    key={b._id}
                    className="hover:bg-gray-50 transition-all duration-150"
                  >
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {b?.trackingId || b._id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {b?.customer?.name || "Unknown"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          b.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : b.status === "In Transit"
                            ? "bg-yellow-100 text-yellow-700"
                            : b.status === "Picked Up"
                            ? "bg-blue-100 text-blue-700"
                            : b.status === "Booked"
                            ? "bg-purple-100 text-purple-700"
                            : b.status === "Failed"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {b?.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      ৳ {b?.amount || "0"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="mt-8 border-t pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center text-sm">
            {["Booked", "Picked Up", "In Transit", "Delivered", "Failed"].map(
              (status) => {
                const count = bookings.filter(
                  (b) => b.status === status
                ).length;
                const badgeColor =
                  status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : status === "In Transit"
                    ? "bg-yellow-100 text-yellow-700"
                    : status === "Picked Up"
                    ? "bg-blue-100 text-blue-700"
                    : status === "Booked"
                    ? "bg-purple-100 text-purple-700"
                    : status === "Failed"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-200 text-gray-800";

                return (
                  <div
                    key={status}
                    className="flex flex-col items-center justify-center px-4 py-2 rounded shadow-sm border"
                  >
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeColor}`}
                    >
                      {status}
                    </span>
                    <span className="mt-1 text-base font-bold text-gray-700">
                      {count}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ManageBookings;
