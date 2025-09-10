import { Link } from "react-router-dom";
import "../../styles/layout/nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to={"/"} className="home-link">Home</Link>
      <Link to={"/about"} className="home-link">About</Link>
      <Link to={"/add-post"} className="home-link">Add Post</Link>
    </nav>
  )
}
