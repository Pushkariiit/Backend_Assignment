import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles }) => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (!token || !roles.includes(userRole)) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
