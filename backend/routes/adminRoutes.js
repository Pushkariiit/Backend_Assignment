const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");
const { getUsersWithRole, getAllUsers } = require("../controllers/authController"); // Import the new controller function

// Admin Dashboard Route
router.get("/admin-dashboard", authenticate, authorize(["Admin"]), (req, res) => {
    res.status(200).json({ message: `Welcome Admin, ${req.user.username}!` });
});

// Get all users with role 'User'
router.get("/users", authenticate, authorize(["Admin"]), getUsersWithRole);

// Get all users (both Admin and User)
router.get("/all-users", authenticate, authorize(["Admin"]), getAllUsers);

module.exports = router;
