import fs from "fs/promises";

const PATH = "./data/users.json" // relative to app.js

export async function readUsers() {
    try {
        const data = await fs.readFile(PATH, "utf-8");
        const json = await JSON.parse(data);
        console.log(json);

        return json;

    } catch (error) {
        return console.error(error);
    }
}

async function writeUsers(usersStr) {
    try {
        await fs.writeFile(PATH, usersStr, "utf-8");
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function readUserByUsername(username) {
    try {
        const users = await readUsers();
        const user = users.find((u) => u.username === username);
        return user;
        
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function writeUser(user) {
    try {
        const users = await readUsers();
        users.push(user);
        const jsonStr = JSON.stringify(users, null, 2);
        await writeUsers(jsonStr);
        return user;
        
    } catch (error) {
        console.error(error);
        return false;
    }
}