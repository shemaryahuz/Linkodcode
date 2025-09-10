import jwt from "jsonwebtoken";

export default function createToken(username) {
    const payload = {
        username: username
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    return token;
}