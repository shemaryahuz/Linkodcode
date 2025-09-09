import { Link } from "react-router-dom";
import "../../styles/nav.css";

type Page = {
  name: string;
  url:string;
}

type NavProps = {
  pages: Page[]
}

export default function Nav({pages}: NavProps) {
  return (
    <nav className="nav">
      {pages.map((page:Page) => (
        <p><Link to={page.url}>{page.name}</Link></p>
      ))}
    </nav>
  )
}
