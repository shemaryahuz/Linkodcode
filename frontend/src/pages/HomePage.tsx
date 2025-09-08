import { useEffect, useState } from "react";
import {
  fetchPosts,
  type ErrorMessage,
  type Post,
} from "../services/postsService";
import PostCard from "../components/post/PostCard";
import "../styles/homePage.css";

// component to represent the hom page content
export default function HomePage() {
  const initPosts: Post[] = [];
  const [posts, setPosts] = useState(initPosts);
  const [error, setError] = useState("");

  const loadPosts = async () => {
    const result: Post[] | ErrorMessage = await fetchPosts();
    if ("error" in result) {
      setError(result.error);
      return;
    }
    setPosts(result);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <main className="home-page">
      {error ? (
        <section className="error-message">Error loading posts: {error}</section>
      ) : (
        posts?.map((post: Post) => (
          <PostCard
            key={post.id}
            imageUrl={post.imageUrl}
            description={post.description}
            author={post.author}
            time={post.time}
          />
        ))
      )}
    </main>
  );
}
