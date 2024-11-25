import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";  // Add User Dashboard
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Register and Login Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes for Admin and User */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={["Admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute roles={["User"]}>
              <UserDashboard />  {/* Assuming UserDashboard exists */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
