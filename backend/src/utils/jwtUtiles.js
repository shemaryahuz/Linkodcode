import jwt from "jsonwebtoken";

export function createToken(username) {
    const payload = {
        username: username
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    return token;
}

export function getDecodedToken(token, handler) {
    return jwt.verify(token, process.env.JWT_SECRET, handler);
}