import type { Post } from "../../services/postsService";
import PostCard from "./PostCard";
import "../../styles/postsFeed.css";

type PostsFeedProps = {
    posts: Post[];
}

export default function PostsFeed({ posts }: PostsFeedProps) {
  return (
    <section className="posts-feed">
      {posts?.map((post: Post) => (
        <PostCard
          key={post.id}
          imageUrl={post.imageUrl}
          description={post.description}
          author={post.author}
          time={post.time}
        />
      ))}
    </section>
  )
}
