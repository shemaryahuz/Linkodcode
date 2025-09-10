import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById, type Post } from "../services/postsService";
import LoadingDisplay from "../components/common/LoadingDisplay";
import ErrorDisplay from "../components/common/ErrorDisplay";
import PostCard from "../components/post/PostCard";
import "../styles/pages/singlePostPage.css"

export default function SinglePostPage() {
  const { id } = useParams();
  const initPost: Post = { 
    id: "",
    author: "", 
    description:"", 
    time: "", 
    imageUrl: "",
 }
  const [post, setPost] = useState(initPost);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPost = async () => {
    const result = await fetchPostById(id);
    if ("error" in result) {
      setError(result.error);
      setIsLoading(false);
      return;
    }
    setPost(result);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <main className="page single-post-page">
      {isLoading && <LoadingDisplay />}
      {!isLoading && error && <ErrorDisplay error={error} />}
      {!isLoading && !error && <PostCard post={post} onPostClick={() => {}}/>}
    </main>
  );
}
