import { readUserByUsername, writeUser } from "../services/usersService.js";
import bcrypt from "bcrypt";
import { createToken } from "../utils/jwtUtiles.js";

export async function login(req, res) {
    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        const user = await readUserByUsername(username);

        if (!user) {
            return res.status(401).json({ error: "Username not found" });
        }

        const isValidPassword = await bcrypt.compare(password, user.passwordHash);

        if (!isValidPassword) {
            return res.status(401).json({ error: "Wrong password" });
        }

        const token = createToken(username);

        res.setHeader("Authorization", `Bearer ${token}`);

        res.json({ message: "You logged in successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function register(req, res) {
    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        const existing = await readUserByUsername(username);
        if (existing) {
            return res.status(401).json({ error: "Username already taken" });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = {
            username: username,
            passwordHash: passwordHash
        }

        const created = await writeUser(newUser);

        if (!created) {
            res.status(500).json({ error: "Internal server error" });
        }

        const token = createToken(username);

        res.setHeader("Authorization", `Bearer ${token}`);

        res.json({ message: "You have registered successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}