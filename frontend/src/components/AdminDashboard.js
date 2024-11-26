import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const AdminDashboard = () => {
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [adminName, setAdminName] = useState(""); // State to store admin's name
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchAdminData = async () => {
        try {
            const dashboardResponse = await axios.get("http://localhost:5000/admin/admin-dashboard", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setMessage(dashboardResponse.data.message);

            const usersResponse = await axios.get("http://localhost:5000/admin/all-users", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const usersData = usersResponse.data.users;
            setUsers(usersData.filter(user => user.role === "User"));
            setAdmins(usersData.filter(user => user.role === "Admin"));

            // Set the admin's name
            const adminData = usersData.find(user => user.role === "Admin");
            if (adminData) {
                setAdminName(adminData.username); // Assuming username contains the admin's name
            }
        } catch (error) {
            setMessage(error.response?.data?.error || "Failed to fetch admin data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdminData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div style={styles.container}>
            <button onClick={handleLogout} style={styles.logoutButton}>
                <FaSignOutAlt style={styles.icon} /> Logout
            </button>

            <div style={styles.header}>
                <h2 style={styles.welcomeText}>Welcome Admin, {adminName}</h2>
            </div>

            <div style={styles.content}>
                {loading ? (
                    <div style={styles.loading}>Loading...</div>
                ) : (
                    <>
                        <div style={styles.listContainer}>
                            <h3 style={styles.listTitle}>Admins</h3>
                            <ul style={styles.list}>
                                {admins.map(admin => (
                                    <li key={admin._id} style={styles.listItem}>
                                        {admin.username}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={styles.listContainer}>
                            <h3 style={styles.listTitle}>Users</h3>
                            <ul style={styles.list}>
                                {users.map(user => (
                                    <li key={user._id} style={styles.listItem}>
                                        {user.username}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f1f1f1",
        padding: "20px",
    },
    logoutButton: {
        alignSelf: "flex-end",
        padding: "10px 20px",
        backgroundColor: "#ff4c4c",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
        marginBottom: "20px",
        transition: "background-color 0.3s",
    },
    header: {
        width: "100%",
        textAlign: "center",
        marginBottom: "20px",
    },
    welcomeText: {
        fontSize: "1.8rem",
        color: "#333",
        margin: 0,
    },
    content: {
        display: "flex",
        width: "100%",
        maxWidth: "1200px",
        gap: "20px",
    },
    listContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    listTitle: {
        fontSize: "1.5rem",
        marginBottom: "15px",
        color: "#333",
    },
    list: {
        listStyleType: "none",
        padding: "0",
        margin: "0",
    },
    listItem: {
        backgroundColor: "#f9f9f9",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
};

export default AdminDashboard;
