import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"; // Import Font Awesome logout icon

const AdminDashboard = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // For navigation
    const [loading, setLoading] = useState(true);

    const fetchAdminData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/admin/admin-dashboard", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the JWT token
                },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.error || "Failed to fetch admin data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdminData();
    }, []);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove the JWT token from localStorage
        navigate("/"); // Navigate to the home page after logout
    };

    return (
        <div style={styles.container}>
            <div style={styles.innerContainer}>
                <h2 style={styles.title}>Admin Dashboard</h2>

                {loading ? (
                    <div style={styles.loading}>Loading...</div>
                ) : (
                    <p style={styles.message}>{message}</p>
                )}

                <button onClick={handleLogout} style={styles.logoutButton}>
                    <FaSignOutAlt style={styles.icon} /> Logout
                </button>
            </div>
        </div>
    );
};

// Styling
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f1f1f1",  // Light background color
    },
    innerContainer: {
        backgroundColor: "#ffffff",  // White background for content
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        width: "100%",
        maxWidth: "600px", // Centered container with max width
    },
    title: {
        fontSize: "2rem",
        marginBottom: "20px",
        color: "#333", // Dark text color for title
    },
    loading: {
        fontSize: "1.2rem",
        color: "#ff5733",
        fontWeight: "bold",
        animation: "fadeIn 2s ease-out",
    },
    message: {
        fontSize: "1.1rem",
        color: "#333",
        marginBottom: "30px",
        animation: "fadeIn 2s ease-out",
    },
    logoutButton: {
        padding: "12px 24px",
        backgroundColor: "#ff4c4c",  // Red color for logout button
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background-color 0.3s",
        width: "100%",
    },
    icon: {
        marginRight: "10px",
        fontSize: "1.2rem",
    },
};

export default AdminDashboard;
