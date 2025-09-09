
export interface Post {
  id?: number;
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

      const res = await fetch(POSTS_URL);
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

export async function submitNewPost(post:Post): Promise<any | ErrorMessage> {
    try {
      const req = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
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

