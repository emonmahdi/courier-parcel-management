import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ role, children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-center p-6">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;




// import React from "react";
// import { Navigate, Outlet } from "react-router";
// import { useAuth } from "../hooks/useAuth";

// const PrivateRoute = ({ role }) => {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return <p>Loading....</p>;
//   }

//   if (!user || user?.role !== role) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;
