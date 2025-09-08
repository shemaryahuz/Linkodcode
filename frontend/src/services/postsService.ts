
export interface Post {
  id?: number;
  imageUrl?: string;
  description: string;
  author: string;
  time: string;
}

const POSTS_URL = "http://localhost:3000/api/posts";

export async function loadPosts(): Promise<Post[] | void> {
    try {
      const res = await fetch(POSTS_URL);
      const body = await res.json();
      console.log(body);
      return body.posts;
    } catch (error) {
      return console.error(error);
    }
}

