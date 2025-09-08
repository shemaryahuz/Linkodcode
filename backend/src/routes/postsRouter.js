// router for '/posts' endpoints
import express from "express";
import { getAllPosts } from "../controllers/postsController.js";

const postsRouter = express.Router();

postsRouter.get("/", getAllPosts);

export default postsRouter;