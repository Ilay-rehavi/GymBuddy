import { Link } from "react-router-dom";

import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header>
      <div className="navbar-container">
        <Link className="nav-link" to="/">
          <h1>Gym Buddy</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
