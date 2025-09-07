
export interface Post {
  id?: number;
  title: string;
  content: string;
  author: string;
}

export async function loadPosts(): Promise<Post[]> {
    const res = await fetch('../data/posts.json');
    const posts = await res.json()
    console.log(posts);
    return posts;
}

