
import type { Post } from "../../services/postsService";
import "../../styles/post/postCard.css";
import PostDetails from "./PostDetails";

type PostCardProps = {
  post: Post;
  onPostClick: () => void;
}

// component to represent post card
export default function PostCard({post, onPostClick}: PostCardProps) {

  return (
    <section className="post-card" onClick={onPostClick}>
      <img 
        className="post-img"
        src={`http://localhost:3000/api/${post.imageUrl}`} 
        alt="post image" 
      />
      <PostDetails 
        description={post.description}
        author={post.author}
        time={post.time}
      />
    </section>
  )
}
