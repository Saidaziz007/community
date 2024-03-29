import { React, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { NAVBAR_ITEMS } from "../../static";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const navbarShrink = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener(`scroll`, navbarShrink);
  return (
    <header className={navbar ? `navbar active` : `navbar`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <ul className="nav-list">
            {NAVBAR_ITEMS?.map((el) => (
              <li key={el.id} className="nav-item">
                <NavLink to={el.url}>{el.title}</NavLink>
              </li>
            ))}
            <button>Clone Project</button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
