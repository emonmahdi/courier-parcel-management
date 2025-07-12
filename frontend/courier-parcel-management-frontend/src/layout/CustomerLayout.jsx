import { NavLink, Outlet } from "react-router";

export default function CustomerLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-green-700 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Customer Panel</h2>
        <nav className="space-y-2">
          <NavLink to="/customer/book" className="block hover:bg-green-600 p-2 rounded">Book Parcel</NavLink>
          <NavLink to="/customer/history" className="block hover:bg-green-600 p-2 rounded">Booking History</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
