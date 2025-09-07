import "../styles/header.css";
import Logo from "./Logo";
import Slogan from "./Slogan";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Slogan />
    </div>
  );
}
