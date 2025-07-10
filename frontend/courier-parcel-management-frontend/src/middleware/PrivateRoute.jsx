import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ role }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Loading....</p>;
  }

  if (!user || user?.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
