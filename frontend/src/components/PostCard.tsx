import { useState } from "react";
import type { Post } from "../services/postsService";
import "../styles/postCard.css"

// component to represent post card
export default function PostCard({ imageUrl, description, author, time }:Post) {
  const [ like, setLike ] = useState(false);
  const [ likeCount, setLikeCount ] = useState(0);

  const toggleLike = () => {
    setLike(!like);
  }
  return (
    <section className="post-card">
      <img 
        className="post-img"
        src={imageUrl} 
        alt="post image" 
      />
      <p className="description">{description}</p>
      <section className="bottom">
        <p className="author">{author}</p>
        <p className="time">{time}</p>
        <button 
          className="like-btn"
          onClick={() => toggleLike()}
        >
          {
            like ? (<img 
              src="../../public/like-icon-clicked.png"
              alt="like icon clicked"
            />) :
            (<img
              src="../../public/like-icon.png"
              alt="like icon"
            />)
          }
        </button>
      </section>
    </section>
  )
}
