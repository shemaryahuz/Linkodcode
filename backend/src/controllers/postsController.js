// handlers for requests on '/posts' endpoints

export async function getAllPosts(req, res) {

    const posts = await getAllPosts();

    if (!posts) {
        return res.status(500).json({ error: "Internal server error" });
    }

    if (!posts.length) {
        return res.status(404).json({ error: "No posts yet" });
    }

    return res.json({ posts: posts });
}