import Landing from "@/pages/Landing";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "@/pages/dashboard/Profile";
import Settings from "@/pages/dashboard/Settings";
import PublicLayout from "@/layouts/PublicLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardHome from "@/pages/dashboard/DashboardHome";

const AppRoutes = () => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/dashboard" replace /> : <Landing />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
