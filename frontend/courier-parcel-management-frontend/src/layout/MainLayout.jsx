import { Outlet, Link } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <header className="p-4 bg-blue-600 text-white flex justify-between">
        <h1>Courier System</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
