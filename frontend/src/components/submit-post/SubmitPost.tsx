import React, { useState } from 'react'
import "../../styles/submit-post.css";
import { submitNewPost } from '../../services/postsService';

export default function SubmitPost() {

  const [ post, setPost ] = useState({ author: "", description: "" });
  const [ error, setError ] = useState("");
  const [ success, setSuccess ] = useState("");

  const setAuthor = (auther: string) => {
    setError("");
    setPost((post) => ({ ...post, author: auther }));
  };

  const setDesc = (desc: string) => {
    setError("");
    setPost((post) => ({ ...post, description: desc }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!post.author || !post.description) {
        return setError("Author name and description are required");
    }
    const result = await submitNewPost(post);
    if (result.error) {
        return setError(result.error)
    }
    setSuccess(result);
  }

  return (
    success && <p className='success'>{success}!</p> || <form className='submit-post' onSubmit={handleSubmit}>
      <h1>Add new Post</h1>
      <label htmlFor="name">Author name: </label>
      <input type="text" id="name" onChange={(e) => setAuthor(e.target.value)}/>
      <label htmlFor="description">Description: </label>
      <textarea id="description" onChange={(e) => setDesc(e.target.value)}></textarea>
      <button type='submit'>Add Post</button>
      {error && <p className='error'>Faild: {error}!</p>}
    </form>
  )
}
