import "./style.css";

export default function Nav() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-item">
          <a href="#">Home</a>
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
