// const express = require("express");
// const router = express.Router();
// const authorize = require('../middlewares/authorize')

// router.get("/admin-dashboard", authorize(["Admin"]), (req, res) => {
//     res.status(200).json({ message: `Welcome Admin, ${req.user.username}!` });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");
const { getUsersWithRole } = require("../controllers/authController");  // Correct import

// Admin Dashboard Route
router.get("/admin-dashboard", authenticate, authorize(["Admin"]), (req, res) => {
    res.status(200).json({ message: `Welcome Admin, ${req.user.username}!` });
});

// Get all users with role 'User'
router.get("/users", authenticate, authorize(["Admin"]), getUsersWithRole);

module.exports = router;
