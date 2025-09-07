import type { Post } from "../services/postsService";

export default function PostCard({ title, content, author }:Post) {
  return (
    <section className="postCard">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{author}</p>
    </section>
  )
}
