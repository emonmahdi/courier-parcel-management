// src/pages/auth/Login.jsx
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const { login, error, loading } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form);
    if (res?.meta?.requestStatus === "fulfilled") {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-8 w-full max-w-md rounded space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          className="w-full px-4 py-2 border rounded"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border rounded"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
