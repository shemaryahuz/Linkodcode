import { getToken } from "./authService";

export interface Post {
  id?: string;
  imageUrl?: string;
  description: string;
  author: string;
  time?: string;
}

export interface ErrorMessage {
  error: string;
}

const POSTS_URL = "http://localhost:3000/api/posts";

export async function fetchPosts(): Promise<Post[] | ErrorMessage> {
    try {

      const req: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": getToken() || "",
        },
        credentials: "include"
      };
      const res = await fetch(POSTS_URL, req);
      const body = await res.json();

      console.log(body);

      if (!res.ok) {
        return { error: body.error || "Unknown error" }
      }

      return body.posts;
    } catch (error) {
      console.error(error);
      return { error: "Network error" }
    }
}

export async function fetchPostById(postId: string | undefined): Promise<Post | ErrorMessage> {
    try {

      const req: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": getToken() || "",
        },
        credentials: "include"
      };

      const res = await fetch(`${POSTS_URL}/${postId}`, req);
      const body = await res.json();

      console.log(body);

      if (!res.ok) {
        return { error: body.error || "Unknown error" }
      }

      return body;

    } catch (error) {
      console.error(error);
      return { error: "Network error" }
    }
}

export async function submitNewPost(post:Post): Promise<any | ErrorMessage> {
    try {
      const req: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": getToken() || "",
        },
        body: JSON.stringify(post),
        credentials: "include"
      };
      const res = await fetch(POSTS_URL, req);
      const body = await res.json();

      if (!res.ok) {
        return { error: body.error || "Unknown error" };
      }
      
      return body.message;

    } catch (error) {
      console.log(error);
      return { error: "Network error" }
    }
}

