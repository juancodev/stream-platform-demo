import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from 'context/AuthContext';
import { ProtectedRouter } from 'components/protectedrouter/ProtectedRouter'

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={
          <ProtectedRouter>
            <AdminLayout />
          </ProtectedRouter>
        } />
        <Route path="rtl/*" element={<RtlLayout />} />
        <Route path="/" element={<Navigate to="/auth" replace />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
