import type { Post } from "../services/postsService";


// component to represent post card
export default function PostCard({ imageUrl, description, author, time }:Post) {
  return (
    <section className="post-card">
      <img 
        src={imageUrl} 
        alt="post image" 
      />
      <p>{description}</p>
      <p>{author}</p>
      <p>{time}</p>
    </section>
  )
}
