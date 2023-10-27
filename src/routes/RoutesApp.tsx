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
import { useState } from "react";
import { AuthProvider } from "../context/Auth/AuthContext";

export const RoutesApp = () => {
  const [haveLogged] = useState<boolean>(false);

  return (
    <div>
      {!haveLogged ? (
        <Routes>
          <Route
            path="/login"
            element={
              <AuthProvider>
                <AuthLayout>
                  <ViewLogin />
                </AuthLayout>
              </AuthProvider>
            }
          />

          <Route
            path="/register"
            element={
              <AuthProvider>
                <AuthLayout>
                  <ViewRegister />
                </AuthLayout>
              </AuthProvider>
            }
          />
          <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/home"
            element={
              <AdminLayout>
                <ViewHome />
              </AdminLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AdminLayout>
                <ViewDashboard />
              </AdminLayout>
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
