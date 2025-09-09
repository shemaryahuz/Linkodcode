import { useEffect, useState } from "react";
import {
  fetchPosts,
  type ErrorMessage,
  type Post,
} from "../services/postsService";
import PostsFeed from "../components/post/PostsFeed";
import ErrorDisplay from "../components/common/ErrorDisplay";
import LoadingDisplay from "../components/common/LoadingDisplay";
import Nav from "../components/layout/Nav";

// component to represent the hom page content
export default function HomePage() {
  const initArray: Post[] = [];
  const [posts, setPosts] = useState(initArray);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPosts = async () => {
    const result: Post[] | ErrorMessage = await fetchPosts();
    if ("error" in result) {
      setError(result.error);
      setIsLoading(false);
      return;
    }
    setPosts(result);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <main className="page">
      <Nav />
      {isLoading && <LoadingDisplay />}
      {!isLoading && error && <ErrorDisplay error={error} />}
      {!isLoading && !error && <PostsFeed posts={posts} />}
    </main>
  );
}
