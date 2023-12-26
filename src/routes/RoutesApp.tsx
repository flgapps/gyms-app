import { Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout, AuthLayout } from "../layouts/Index";
import {
  ViewDashboard,
  ViewHome,
  ViewLogin,
  ViewPayments,
  ViewRegister,
  ViewUsers,
} from "../views/Intex";
import { useContext, useEffect } from "react";
import { AuthContext, AuthProvider } from "../context/Auth/AuthContext";

export const RoutesApp = () => {
  const { session } = useContext(AuthContext);

  return (
    <div>
      {!session ? (
        <Routes>
          <Route
            path="/login"
            element={
              <AuthLayout>
                <ViewLogin />
              </AuthLayout>
            }
          />

          <Route
            path="/register"
            element={
              <AuthLayout>
                <ViewRegister />
              </AuthLayout>
            }
          />
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/home"
            element={
              <AuthProvider>
                <AdminLayout>
                  <ViewHome />
                </AdminLayout>
              </AuthProvider>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthProvider>
                <AdminLayout>
                  <ViewDashboard />
                </AdminLayout>
              </AuthProvider>
            }
          />
          <Route
            path="/users"
            element={
              <AdminLayout>
                <ViewUsers />
              </AdminLayout>
            }
          />
          <Route
            path="/payments"
            element={
              <AdminLayout>
                <ViewPayments />
              </AdminLayout>
            }
          />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      )}
    </div>
  );
};
