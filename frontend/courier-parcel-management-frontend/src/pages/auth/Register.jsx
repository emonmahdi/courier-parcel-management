// src/pages/auth/Register.jsx
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const { register, loading, error } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(form);
    if (res?.meta?.requestStatus === "fulfilled") {
      navigate("/"); // Redirect after successful registration
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 shadow-md rounded space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full border rounded px-4 py-2"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full border rounded px-4 py-2"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full border rounded px-4 py-2"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        >
          <option value="customer">Customer</option>
          <option value="agent">Delivery Agent</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
