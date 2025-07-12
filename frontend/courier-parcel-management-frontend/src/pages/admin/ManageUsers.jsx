// src/pages/admin/ManageUsers.jsx
import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // TODO: API call to fetch all users
    setUsers([
      { id: "U1", name: "Hasan", role: "customer", email: "hasan@example.com" },
      { id: "U2", name: "Rifat", role: "agent", email: "rifat@example.com" },
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Users</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4 capitalize">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
