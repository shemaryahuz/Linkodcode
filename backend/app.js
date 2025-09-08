import express from "express";
import cors from "cors";
import path from "path";
import postsRouter from "./src/routes/postsRouter.js";

const app = express();

app.use(cors());

const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/posts", postsRouter);

app.use("/", (req, res) => {
    res.status(404).json({ error: "Route not found" });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) console.error(error);
    console.log(`Server is running on: http://localhost:${PORT}`);
});