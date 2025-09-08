
export interface Post {
  id?: number;
  imageUrl?: string;
  description: string;
  author: string;
  time: string;
}

export async function loadPosts(): Promise<Post[]> {
    const res = await fetch('../data/posts.json');
    const posts = await res.json()
    console.log(posts);
    return posts;
}

