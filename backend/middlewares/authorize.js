const jwt = require("jsonwebtoken");

const authorize = (roles) => (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("Token:", token); // Log the token

    if (!token) return res.status(401).json({ error: "Access denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded); // Log decoded token to verify

        req.user = decoded;

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: "Forbidden" });
        }
        next();
    } catch (error) {
        console.error("JWT Error:", error); // Log any errors during token verification
        res.status(400).json({ error: "Invalid token" });
    }
};

module.exports = authorize;
