import type { Post } from "../services/postsService";


// component to represent post card
export default function PostCard({ title, content, author }:Post) {
  return (
    <section className="post-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{author}</p>
    </section>
  )
}
