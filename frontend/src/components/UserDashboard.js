import React, { useEffect, useState } from "react";
import axios from "../services/api"; // Ensure that axios is correctly set up for API calls
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const UserDashboard = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Get token from localStorage
                const token = localStorage.getItem("token");

                if (!token) {
                    setMessage("No token found, please log in.");
                    return;
                }

                // Send token in the Authorization header
                const response = await axios.get("/user/user-dashboard", {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Add the token to the headers
                    },
                });

                // Use the response data (for now, we'll just display the message)
                setMessage(response.data.message || "User data fetched successfully.");
            } catch (error) {
                setMessage("Failed to fetch user data.");
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        // Remove token from localStorage
        localStorage.removeItem("token");

        // Navigate to home page
        navigate("/");
    };

    return (
        <div style={styles.container}>
            <div style={styles.innerContainer}>
                <h2 style={styles.title}>User Dashboard</h2>
                {message && (
                    <p style={{ ...styles.message, color: message.includes("Failed") ? "red" : "green" }}>
                        {message}
                    </p>
                )}
                <p style={styles.welcomeMessage}>
                    Welcome to the user dashboard! Here is your personalized content.
                </p>

                {/* Logout Button */}
                <button onClick={handleLogout} style={styles.logoutButton}>
                    Logout
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
    message: {
        fontSize: "1.2rem",
        marginBottom: "20px",
    },
    welcomeMessage: {
        fontSize: "1.1rem",
        marginBottom: "30px",
        color: "#666",  // Light text color for the message
    },
    logoutButton: {
        padding: "10px 20px",
        backgroundColor: "#ff4c4c",  // Red color for logout button
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "background-color 0.3s",
    },
};

export default UserDashboard;
