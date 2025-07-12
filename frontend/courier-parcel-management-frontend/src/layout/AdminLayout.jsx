import { NavLink, Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <NavLink to="/admin/dashboard" className="block hover:bg-blue-600 p-2 rounded">Dashboard</NavLink>
          <NavLink to="/admin/assign" className="block hover:bg-blue-600 p-2 rounded">Assign Agent</NavLink>
          <NavLink to="/admin/users" className="block hover:bg-blue-600 p-2 rounded">Manage Users</NavLink>
          <NavLink to="/admin/bookings" className="block hover:bg-blue-600 p-2 rounded">Bookings</NavLink>
          <NavLink to="/admin/reports" className="block hover:bg-blue-600 p-2 rounded">Reports</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
