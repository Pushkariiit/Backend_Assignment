const bcrypt = require("bcrypt");
const User = require("../models/User"); // Adjust the path to your User model as needed

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Create new user with default role 'User'
        const user = new User({
            username,
            password,
            role: role || "User" // Default to 'User' if no role is provided
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const jwt = require("jsonwebtoken");

// Login Function
const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: "Invalid credentials" });

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, username: user.username, role: user.role },
            "your_jwt_secret_key", // Replace this with an environment variable for security
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getUsersWithRole = async (req, res) => {
    try {
        // Retrieve all users with role "User"
        const users = await User.find({ role: "User" });
        res.status(200).json({ users });
    } catch (error) {
        console.error("Error fetching users with role 'User':", error);
        res.status(500).json({ error: "Internal server error" });
    }
};




module.exports = { register, login, getUsersWithRole };
