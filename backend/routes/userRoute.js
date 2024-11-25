const express = require("express");
const router = express.Router();
const authorize = require("../middlewares/authorize");  // Ensure the correct path

// User dashboard route, accessible by both User and Admin
router.get("/user-dashboard", authorize(["User", "Admin"]), (req, res) => {
    res.status(200).json({ message: `Hello, ${req.user.username}!` });
});

module.exports = router;
