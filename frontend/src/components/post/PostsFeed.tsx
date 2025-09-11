import type { Post } from "../../services/postsService";
import PostCard from "./PostCard";
import "../../styles/post/postsFeed.css";
import { useNavigate } from "react-router-dom";

type PostsFeedProps = {
    posts: Post[];
}

export default function PostsFeed({ posts }: PostsFeedProps) {
  const navigate = useNavigate();
  const navToSinglePost = (postId: string) => {
    navigate(`./${postId}`)
  }
  const OnCardClick = (id: string | undefined) => {
    navToSinglePost(id || "");
  }
  return (
    <section className="posts-feed">
      {posts?.map((post: Post) => (
        <PostCard
          key={post.id}
          post={post}
          onPostClick={() => OnCardClick(post.id)}
        />
      ))}
    </section>
  )
}
