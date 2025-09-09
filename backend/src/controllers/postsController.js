// handlers for requests on '/posts' endpoints

import { readPostById, readPosts, writePost } from "../services/postsService.js";

export async function getAllPosts(req, res) {

    const posts = await readPosts();

    if (!posts) {
        return res.status(500).json({ error: "Internal server error" });
    }

    if (!posts.length) {
        return res.status(404).json({ error: "No posts yet" });
    }

    return res.json({ posts: posts });
}

export async function getPost(req, res) {
    const { id } = req.params;
    try {   
        const post = await readPostById(id);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.json(post);

    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export async function addPost(req, res) {
    const post = req.body;
    try {
        const added = writePost(post);
        if (!added) {
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.status(201).json({ message: "Post added successfully" });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}