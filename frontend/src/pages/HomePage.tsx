import { useState } from "react";
import { loadPosts, type Post } from "../services/postsService";
import PostCard from "../components/PostCard";

const postsArr: Post[] = await loadPosts();


// component to represent the hom page content
export default function HomePage() {
  const [posts, setPosts] = useState(postsArr);
  return (
    <main className="home-page">
      {posts.map((post: Post) => (
        <PostCard 
            key={post.id} 
            title={post.title} 
            content={post.content} 
            author={post.author}
        />
      ))}
    </main>
  )
}
