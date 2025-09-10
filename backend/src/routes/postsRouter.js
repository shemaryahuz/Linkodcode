// router for '/posts' endpoints
import express from "express";
import { addPost, getAllPosts, getPost } from "../controllers/postsController.js";
import { validatePost } from "../middlewares/postsMiddlware.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const postsRouter = express.Router();

postsRouter.get("/", authenticateToken, getAllPosts);

postsRouter.get("/:id", authenticateToken, getPost);

postsRouter.post("/", authenticateToken, validatePost, addPost);

export default postsRouter;