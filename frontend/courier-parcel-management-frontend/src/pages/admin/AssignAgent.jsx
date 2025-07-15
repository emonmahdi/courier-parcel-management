// src/pages/admin/AssignAgent.jsx
// import {
//   useGetAllParcelsQuery,
//   useAssignAgentMutation,
// } from "../../redux/api/parcelApi";
import { useEffect, useState } from "react";
import {
  useAssignAgentMutation,
  useGetAllParcelsQuery,
} from "../../redux/features/parcel/parcelApi";

const AssignAgent = () => {
  const {
    data: allParcels = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllParcelsQuery();
  const [assignAgent, { isLoading: isAssigning }] = useAssignAgentMutation();

  const [agents, setAgents] = useState([]);

  // Simulate agents until real API is ready
  useEffect(() => {
    setAgents([
      { id: "A01", name: "Imran Hossain" },
      { id: "A02", name: "Fatema Begum" },
      { id: "A03", name: "Arif Mahmud" },
    ]);
  }, []);

  const handleAssign = async (parcelId, agentId) => {
    if (!agentId) return;
    try {
      await assignAgent({ id: parcelId, agentId }).unwrap();
      alert(`✅ Agent assigned to Parcel ${parcelId}`);
      refetch(); // Refresh list
    } catch (err) {
      console.error(err);
      alert(
        `❌ Failed to assign agent: ${err?.data?.message || "Server error"}`
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        🛵 Assign Delivery Agents
      </h2>

      {isLoading ? (
        <p className="text-blue-500">Loading parcels...</p>
      ) : isError ? (
        <p className="text-red-500">
          Error: {error?.data?.message || "Failed to fetch parcels."}
        </p>
      ) : allParcels?.length === 0 ? (
        <p className="text-gray-500">No parcels available for assignment.</p>
      ) : (
        <div className="space-y-5">
          {allParcels.map((parcel) => (
            <div
              key={parcel._id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between border border-gray-200 p-4 rounded-md shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="text-gray-700 font-medium">
                  📦 Parcel ID:{" "}
                  <span className="font-semibold text-black">
                    {parcel?.trackingId || parcel?._id}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  Status: {parcel?.status}
                </p>
              </div>

              <select
                defaultValue=""
                onChange={(e) => handleAssign(parcel._id, e.target.value)}
                className="mt-3 md:mt-0 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option disabled value="">
                  Select Agent
                </option>
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>
                    {agent.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {isAssigning && (
        <p className="mt-4 text-blue-500 font-medium">
          Assigning agent, please wait...
        </p>
      )}
    </div>
  );
};

export default AssignAgent;
