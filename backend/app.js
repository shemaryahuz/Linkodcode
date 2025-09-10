import express from "express";
import cors from "cors";
import path from "path";
import postsRouter from "./src/routes/postsRouter.js";
import authRouter from "./src/routes/authRouter.js";

const app = express();

// allow cors for localhost react app
app.use(cors({
    origin:["http://localhost:5173", "http://localhost:5174"],
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials:true,
    allowedHeaders:["Content-Type"]
}));

const __dirname = path.resolve();
app.use("/api", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/api", authRouter);

app.use("/api/posts", postsRouter);

app.use("/", (req, res) => {
    res.status(404).json({ error: "Route not found" });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) console.error(error);
    console.log(`Server is running on: http://localhost:${PORT}`);
});