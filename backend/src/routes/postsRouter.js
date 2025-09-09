// router for '/posts' endpoints
import express from "express";
import { addPost, getAllPosts, getPost } from "../controllers/postsController.js";
import { validatePost } from "../../middlewares/postsMiddlware.js";

const postsRouter = express.Router();

postsRouter.get("/", getAllPosts);

postsRouter.get("/:id", getPost);

postsRouter.post("/", validatePost, addPost);

export default postsRouter;