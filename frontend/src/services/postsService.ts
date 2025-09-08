
export interface Post {
  id?: number;
  imageUrl?: string;
  description: string;
  author: string;
  time: string;
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
        return { error: body.error || "Internal server error" }
      }

      return body.posts;
    } catch (error) {
      console.error(error);
      return { error: "Network error" }
    }
}

