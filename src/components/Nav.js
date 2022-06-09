import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          About
        </Link>
        <Link style={navStyle} to="/shop">
          Shop
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
