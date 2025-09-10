// api service for authentication

import { saveToken } from "./authService";

export type User = {
    username: string,
    password: string
}

async function loginOrRegister(user: User, method: string) {
    try {
        const authURL = "http://localhost:3000/api";
        const requestOptions: RequestInit = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user),
            credentials: "include"
        };
        const response = await fetch(`${authURL}/${method}`, requestOptions);
        const responseObj = await response.json();

        if (!response.ok) {
            console.log(responseObj.error);
            return { error: responseObj.error || "Unknown error" };
        }
        const token = response.headers.get("Authorization") ||  "";
        saveToken(token);
        return responseObj;

    } catch (error) {
        console.error(error);
        return { error: "Network error" };
    }
}

export async function login(user: User) {
    return await loginOrRegister(user, "login");
}

export async function register(user: User) {
    return await loginOrRegister(user, "register");
}