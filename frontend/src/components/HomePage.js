import React from "react";

// Import Bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                backgroundColor: "#f7f9fc", // Light background
                color: "#333", // Dark text color
                fontFamily: "'Roboto', sans-serif",
            }}
        >
            {/* Header Section */}
            <header
                className="py-3 px-4 text-center"
                style={{
                    backgroundColor: "#002855", // Dark blue header
                    color: "white",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h1 style={{ fontWeight: "bold", marginBottom: "0" }}>VRV Security</h1>
                <p style={{ fontSize: "16px", marginTop: "5px" }}>
                    Safeguarding your digital presence with cutting-edge technology.
                </p>
            </header>

            {/* Main Content Section */}
            <div
                className="container py-5 flex-grow-1"
                style={{
                    flex: "1",
                }}
            >
                <div className="row align-items-center">
                    {/* Company Info */}
                    <div className="col-md-6 mb-4">
                        <h2 style={{ color: "#002855", fontWeight: "700" }}>
                            About VRV Security
                        </h2>
                        <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                            At VRV Security, we specialize in providing comprehensive security
                            solutions for businesses and individuals. Our state-of-the-art
                            technology ensures your data is protected from threats, offering
                            peace of mind in a fast-paced digital world.
                        </p>
                        <ul>
                            <li>24/7 Security Monitoring</li>
                            <li>Advanced Data Encryption</li>
                            <li>Tailored Security Solutions</li>
                            <li>Expert Support Team</li>
                        </ul>
                    </div>

                    {/* Options Section */}
                    <div className="col-md-6 text-center">
                        <div
                            className="card p-4 shadow-sm"
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "10px",
                                border: "1px solid #d1e7ff", // Light border
                            }}
                        >
                            <h3 style={{ color: "#002855", fontWeight: "600" }}>
                                Ready to Get Started?
                            </h3>
                            <p style={{ fontSize: "14px", marginBottom: "20px" }}>
                                Choose an option below to begin your secure journey.
                            </p>
                            {/* Buttons */}
                            <div className="d-grid gap-3">
                                <a
                                    href="/register"
                                    className="btn btn-primary btn-lg"
                                    style={{
                                        backgroundColor: "#0056b3", // Primary button color
                                        border: "none",
                                    }}
                                >
                                    Register
                                </a>
                                <a
                                    href="/login"
                                    className="btn btn-outline-primary btn-lg"
                                    style={{
                                        color: "#0056b3",
                                        border: "2px solid #0056b3",
                                    }}
                                >
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer
                className="py-3 text-center"
                style={{
                    backgroundColor: "#002855",
                    color: "white",
                    fontSize: "14px",
                }}
            >
                &copy; {new Date().getFullYear()} VRV Security. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
