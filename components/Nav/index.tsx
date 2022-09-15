import { Link } from "@mui/material";
import "./style.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menu-item">
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item">
          <a href="#">Finance</a>
        </li>
        <li className="menu-item">
          <a href="#">Business</a>
        </li>
        <li className="menu-item">
          <a href="#">Technology</a>
        </li>
        <li className="menu-item">
          <a href="#">Food</a>
        </li>
      </ul>
    </nav>
  );
}
