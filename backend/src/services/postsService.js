// data access layer for application posts
import fs from "fs/promises";

const PATH = "./data/posts.json" // relative to app.js

// read all posts from json file
export async function readPosts() {
    try {
        const data = await fs.readFile(PATH, "utf-8");
        console.log(data);

        const json = await JSON.parse(data);
        console.log(json);

        return json;

    } catch (error) {
        return console.error(error);
    }
}

async function writePosts(postsStr) {
    try {
        await fs.writeFile(PATH, postsStr, "utf-8");
        return true;
        
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function readPostById(postId) {
    try {
        const posts = await readPosts();
        const post = posts.find((p) => p.id === postId);
        return post;
        
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function writePost(post) {
    try {
        const posts = await readPosts();
        post.id = String(posts.length + 1);
        posts.push(post);
        const jsonStr = JSON.stringify(posts, null, 2);
        await writePosts(jsonStr);
        return true;
        
    } catch (error) {
        console.error(error);
        return false;
    }
}