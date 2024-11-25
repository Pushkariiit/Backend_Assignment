// require("dotenv").config();
// const express = require("express");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const adminRoutes = require("./routes/adminRoutes"); // Import admin routes
// const userRoutes = require("./routes/userRoute");

// const cors = require("cors");
// app.use(cors());
// const app = express();
// app.use(express.json());
// app.use("/auth", authRoutes);


// const mongoose = require("mongoose");

// mongoose
//     .connect("mongodb://localhost:27017/rbac", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => console.error("Failed to connect to MongoDB", err));


// connectDB();

// app.use("/api/auth", authRoutes);
// app.use("/admin", adminRoutes); // Register the admin routes
// app.use("/user", userRoutes);  // Register the user routes


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes"); // Import admin routes
const userRoutes = require("./routes/userRoute");

const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();  // Assuming `connectDB()` is handling DB connection

// Route setups
app.use("/auth", authRoutes);   // Authentication routes
app.use("/admin", adminRoutes); // Admin routes
app.use("/user", userRoutes);   // User-specific routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
