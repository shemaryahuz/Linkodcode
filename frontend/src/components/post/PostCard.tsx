
import type { Post } from "../../services/postsService";
import "../../styles/post/postCard.css";
import PostDetails from "./PostDetails";

// component to represent post card
export default function PostCard(post:Post) {

  return (
    <section className="post-card">
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
