import React from 'react'
import "../../styles/submit-post.css";

export default function SubmitPost() {
  return (
    <form className='submit-post'>
      <h1>Add new Post</h1>
      <label htmlFor="name">Author name: </label>
      <input type="text" id="name"/>
      <label htmlFor="description">Description: </label>
      <textarea id="description"></textarea>
      <label htmlFor="imageNum">Choose Image number (1 - 20): </label>
      <input type="number" id="imageNum" min={1} max={20}/>
      <button type='submit'>Add Post</button>
    </form>
  )
}
