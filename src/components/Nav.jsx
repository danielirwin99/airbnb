import React from "react";
import Logo from "../assets/Logo.png";
import "../styles/Nav.css";
import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <figure className="nav__logo">
          <img className="logo" src={Logo} alt="Logo" />
        </figure>
        <SearchBar />
        <ul className="nav__list">
          <li className="nav__links">
            <a className="nav__link" href="">
              Listings
            </a>
          </li>
          <li className="nav__links">
            <a className="nav__link" href="">
              Featured
            </a>
          </li>
          <li className="nav__links">
            <a href="">
              <button>Contact</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
