import { useEffect, useState } from "react";
import {
  fetchPosts,
  type ErrorMessage,
  type Post,
} from "../services/postsService";
import "../styles/homePage.css";
import PostsFeed from "../components/post/PostsFeed";
import ErrorDisplay from "../components/common/ErrorDisplay";

// component to represent the hom page content
export default function HomePage() {
  const initPosts: Post[] = [];
  const [ posts, setPosts ] = useState(initPosts);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState("");

  const loadPosts = async () => {
    const result: Post[] | ErrorMessage = await fetchPosts();
    if ("error" in result) {
      setError(result.error);
      return;
    }
    setPosts(result);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <main>
      {error ? (
       <ErrorDisplay error={error}/> ) : (
       <PostsFeed posts={posts}/>)
      }
    </main>
  );
}
