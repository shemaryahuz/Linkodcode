// middlewares for '/posts' endpoints

export function validatePost(req, res, next) {
    const post = req.body;
    if (!post) {
        return res.status(404).json({ error: "Post content is required" });
    }

    if (!post.description || !post.author) {
        return res.status(400).json({ error: "Post format is invalid" });
    }

    next();
}