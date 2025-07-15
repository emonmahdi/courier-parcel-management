import { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // TODO: Replace with real API call
    setUsers([
      { id: "U1", name: "Hasan", role: "customer", email: "hasan@example.com" },
      { id: "U2", name: "Rifat", role: "agent", email: "rifat@example.com" },
      { id: "U3", name: "Shila", role: "admin", email: "shila@example.com" },
    ]);
  }, []);

  const getRoleBadge = (role) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-600";
      case "agent":
        return "bg-blue-100 text-blue-600";
      case "customer":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">👥 Manage Users</h2>

      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadge(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
