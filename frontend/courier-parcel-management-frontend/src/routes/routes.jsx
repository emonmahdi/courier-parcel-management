// import { createBrowserRouter } from "react-router";
// import App from "../App";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children:[
//       {
//         path:'/about',
//         element:<p>About Page..</p>
//       }
//     ]
//   },
// ]);
// src/routes/routes.jsx
import { createBrowserRouter } from "react-router";
// import MainLayout from "../layout/MainLayout";
import App from "../App";

// Public
// import Home from "../pages/public/Home";
// import About from "../pages/public/About";

// Auth
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";

// Customer
import BookParcel from "../pages/customer/BookParcel";
import BookingHistory from "../pages/customer/BookingHistory";
import TrackParcel from "../pages/customer/TrackParcel";

// Admin
// import AdminDashboard from "../pages/admin/Dashboard";
// import AssignAgent from "../pages/admin/AssignAgent";

// Agent
// import AssignedParcels from "../pages/agent/AssignedParcels";
// import UpdateStatus from "../pages/agent/UpdateStatus";

// Utils
// import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import PrivateRoute from "../middleware/PrivateRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AssignAgent from "../pages/admin/AssignAgent";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageBookings from "../pages/admin/ManageBookings";
import Reports from "../pages/admin/Reports";
import AdminLayout from "../layout/AdminLayout";
import CustomerLayout from "../layout/CustomerLayout";
// import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // Customer routes
      {
        path: "customer",
        element: <PrivateRoute role="customer"><CustomerLayout /></PrivateRoute>,
        children: [
          { path: "book", element: <BookParcel /> },
          { path: "history", element: <BookingHistory /> },
          { path: "track/:id", element: <TrackParcel /> },
        ],
      },

      // Admin routes
      {
        path: "admin",
         element: <PrivateRoute role="admin"><AdminLayout /></PrivateRoute>,
        children: [
          { path: "dashboard", element: <AdminDashboard /> },
            { path: "assign", element: <AssignAgent /> },
            { path: "users", element: <ManageUsers /> },
            { path: "bookings", element: <ManageBookings /> },
            { path: "reports", element: <Reports /> }
        ]
      },

      // Agent routes
      // {
      //   path: "agent",
      //   element: <PrivateRoute role="agent" />,
      //   children: [
      //     { path: "parcels", element: <AssignedParcels /> },
      //     { path: "update/:id", element: <UpdateStatus /> }
      //   ]
      // }
    ],
  },
]);
