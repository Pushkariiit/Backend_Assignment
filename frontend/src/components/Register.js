import React, { useState } from "react";
import axios from "../services/api";

// Bootstrap CSS import
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: "User", // Default role
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); // Clear previous message
        try {
            const response = await axios.post("/auth/register", formData);
            setMessage(response?.data?.message || "Registration successful!");
        } catch (error) {
            const errorMessage =
                error.response?.data?.error || "An error occurred during registration.";
            setMessage(errorMessage);
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                backgroundColor: "#f0f8ff", // Light blue background for a soft feel
            }}
        >
            {/* Company Name Header */}
            <header
                className="text-center py-3"
                style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    letterSpacing: "3px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                }}
            >
                VRV Security
            </header>

            <div
                className="card p-4 shadow-lg"
                style={{
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "15px", // Rounded corners for modern look
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h2 className="text-center mb-3" style={{ color: "#007bff" }}>Create an Account</h2>
                <p className="text-center text-muted mb-4">Fill in the details to register</p>

                {message && (
                    <div
                        className={`alert ${message.includes("successful") ? "alert-success" : "alert-danger"
                            }`}
                        role="alert"
                        style={{ fontSize: "14px" }}
                    >
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label" style={{ color: "#495057" }}>
                            Username
                        </label>
                        <div className="input-group">
                            <span className="input-group-text" style={{ backgroundColor: "#e9ecef" }}>
                                <i className="bi bi-person-fill" style={{ color: "#007bff" }}></i>
                            </span>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="form-control"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                style={{
                                    borderRadius: "0 4px 4px 0",
                                    border: "1px solid #007bff", // Light blue border
                                }}
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" style={{ color: "#495057" }}>
                            Password
                        </label>
                        <div className="input-group">
                            <span className="input-group-text" style={{ backgroundColor: "#e9ecef" }}>
                                <i className="bi bi-lock-fill" style={{ color: "#007bff" }}></i>
                            </span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{
                                    borderRadius: "0 4px 4px 0",
                                    border: "1px solid #007bff", // Light blue border
                                }}
                            />
                        </div>
                    </div>

                    {/* Role Selection */}
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label" style={{ color: "#495057" }}>
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            className="form-select"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            style={{
                                border: "1px solid #007bff", // Light blue border
                            }}
                        >
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        style={{
                            backgroundColor: "#007bff",
                            borderColor: "#007bff",
                            padding: "12px 16px",
                            fontSize: "1rem",
                            transition: "background-color 0.3s ease, transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                    >
                        Register
                    </button>
                </form>

                <div className="text-center mt-3">
                    <a
                        href="/login"
                        style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "#007bff",
                        }}
                    >
                        Already have an account? Sign In
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
