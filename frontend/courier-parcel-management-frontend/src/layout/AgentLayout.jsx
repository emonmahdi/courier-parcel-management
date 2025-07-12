import { Outlet, NavLink } from "react-router";

const AgentLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-yellow-600 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Agent Panel</h2>
        {/* <NavLink to="/agent/parcels">Assigned Parcels</NavLink>
        <NavLink to="/agent/update/123">Update Status</NavLink> */}
        <nav className="space-y-2">
          <NavLink to="/agent/parcels" className="block hover:bg-green-600 p-2 rounded">Assigned Parcels</NavLink>
          <NavLink to="/agent/update/123" className="block hover:bg-green-600 p-2 rounded">Update Status</NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};
export default AgentLayout;
