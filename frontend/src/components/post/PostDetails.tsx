import type { Post } from "../../services/postsService";
import React, { useState } from "react";
import "../../styles/post/postDetails.css";

export default function PostDetails({
    description,
    author,
    time,
    }: Post) {

    const [like, setLike] = useState(false);
    const toggleLike = () => {
        setLike(!like);
    };

    return (
        <section className="post-details">
            <p className="description">{description}</p>
            <section className="bottom">
                <p className="author">{author}</p>
                <p className="time">{time}</p>
                <button 
                    className="like-btn"
                    onClick={(e: React.MouseEvent ) => {e.stopPropagation(); toggleLike();}}
                >
                    {like ? (
                        <img src="/images/like-icon-clicked.png" alt="like icon clicked" />
                    ) : (
                        <img src="/images/like-icon.png" alt="like icon" />
                    )}
                </button>
            </section>
        </section>
    );
}
