// src/pages/admin/AssignAgent.jsx
import { useState, useEffect } from "react";

const AssignAgent = () => {
  const [parcels, setParcels] = useState([]);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // TODO: Fetch from backend
    setParcels([{ id: "P1001", status: "Pending" }]);
    setAgents([{ id: "A01", name: "Imran Hossain" }]);
  }, []);

  const handleAssign = (parcelId, agentId) => {
    // TODO: API call to assign agent
    console.log(`Assign agent ${agentId} to parcel ${parcelId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Assign Delivery Agents</h2>
      <div className="space-y-4">
        {parcels.map((parcel) => (
          <div key={parcel.id} className="border p-4 rounded shadow flex items-center justify-between">
            <span>Parcel ID: {parcel.id}</span>
            <select
              onChange={(e) => handleAssign(parcel.id, e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="">Select Agent</option>
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignAgent;
