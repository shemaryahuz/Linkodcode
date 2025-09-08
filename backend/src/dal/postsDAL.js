// data access layer for application posts
import fs from "fs/promises";

const PATH = "./data/posts.json" // relative to app.js

export async function getPosts() {
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