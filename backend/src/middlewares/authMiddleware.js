import { getDecodedToken } from "../utils/jwtUtiles.js";

export function authenticateToken(req, res, next) {
    try {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ error: "Authentication required" });
        }

        const varifyToken = (err, user) => {
            if (err) {
                console.error(err);
                return res.status(403).json({ error: "Invalid or expiresed token" });
            }
            req.user = user;
            next();
        }

        const decoded = getDecodedToken(token, varifyToken);

        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}