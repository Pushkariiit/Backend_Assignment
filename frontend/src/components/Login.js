import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

// Bootstrap CSS import (add this in your index.html or project entry point)
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setLoginError("");

        try {
            const response = await axios.post("/auth/login", formData);
            const { token } = response.data;

            // Decode token to get the role
            const payload = JSON.parse(atob(token.split(".")[1]));
            const role = payload.role;

            // Save token and role
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);

            // Redirect based on role
            switch (role) {
                case "Admin":
                    navigate("/admin");
                    break;
                case "User":
                    navigate("/user");
                    break;
                default:
                    setLoginError("Invalid user role");
            }
        } catch (error) {
            setLoginError(
                error.response?.data?.error || "Login failed. Please check your credentials."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegisterRedirect = () => {
        navigate("/register"); // Redirects to the registration page
    };

    return (
        <div
            className="d-flex flex-column min-vh-100"
            style={{
                backgroundColor: "#f4f4f9", // Light background color
                overflow: "hidden", // Prevent scrolling
            }}
        >
            {/* Company Name Header */}
            <header
                className="py-3 text-center"
                style={{
                    backgroundColor: "#2575fc",
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                VRV Security
            </header>

            <div
                className="d-flex justify-content-center align-items-center flex-grow-1"
                style={{
                    minHeight: "50vh",
                    backgroundColor: "#f4f4f9", // Light background color
                }}
            >
                <div
                    className="card p-4 shadow-lg"
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        borderRadius: "15px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h2 className="text-center mb-3" style={{ color: "#2575fc" }}>Welcome Back</h2>
                    <p className="text-center text-muted mb-4">Sign in to access your account</p>

                    {loginError && (
                        <div
                            className="alert alert-danger d-flex align-items-center"
                            role="alert"
                            style={{
                                fontSize: "14px",
                                backgroundColor: "#f8d7da",
                                border: "1px solid #f5c6cb",
                            }}
                        >
                            <i className="bi bi-exclamation-circle-fill me-2"></i>
                            {loginError}
                        </div>
                    )}

                    <form onSubmit={onSubmit}>
                        {/* Username Field */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label" style={{ color: "#6c757d" }}>
                                Username
                            </label>
                            <div className="input-group">
                                <span className="input-group-text" style={{ backgroundColor: "#e9ecef" }}>
                                    <i className="bi bi-person-fill" style={{ color: "#2575fc" }}></i>
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
                                        border: "2px solid #2575fc",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" style={{ color: "#6c757d" }}>
                                Password
                            </label>
                            <div className="input-group">
                                <span className="input-group-text" style={{ backgroundColor: "#e9ecef" }}>
                                    <i className="bi bi-lock-fill" style={{ color: "#2575fc" }}></i>
                                </span>
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        borderRadius: "0 4px 4px 0",
                                        border: "2px solid #2575fc",
                                    }}
                                />
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    style={{
                                        borderTopLeftRadius: "0",
                                        borderBottomLeftRadius: "0",
                                    }}
                                >
                                    <i
                                        className={isPasswordVisible ? "bi bi-eye-slash" : "bi bi-eye"}
                                        style={{ color: "#2575fc" }}
                                    ></i>
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={isLoading}
                            style={{
                                backgroundColor: "#2575fc",
                                borderColor: "#2575fc",
                                padding: "12px 16px",
                                fontSize: "1rem",
                                transition: "background-color 0.3s ease, transform 0.2s ease",
                            }}
                            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                        >
                            {isLoading ? (
                                <span>
                                    <i className="spinner-border spinner-border-sm me-2"></i>
                                    Signing in...
                                </span>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <a
                            href="/forgot-password"
                            style={{
                                fontSize: "14px",
                                textDecoration: "none",
                                color: "#2575fc",
                                fontWeight: "500",
                                transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#0d6efd"}
                            onMouseLeave={(e) => e.target.style.color = "#2575fc"}
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* New User Button */}
                    <div className="text-center mt-4">
                        <button
                            className="btn btn-outline-light w-100"
                            style={{
                                borderColor: "#2575fc",
                                color: "#2575fc",
                                transition: "background-color 0.3s ease, color 0.3s ease",
                            }}
                            onClick={handleRegisterRedirect}
                        >
                            New User? Register Here
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;
