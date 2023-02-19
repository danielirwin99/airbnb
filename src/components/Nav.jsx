import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "../styles/Nav.css";
import Modal from "./Modal";
import SearchBar from "./SearchBar";

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="nav__container">
        <figure className="nav__logo">
          <img className="logo" src={Logo} alt="Logo" />
        </figure>
        <SearchBar />
        <ul className="nav__list">
          <li className="nav__links">
            <a className="nav__link" href="#popular">
              Popular
            </a>
          </li>
          <li className="nav__links">
            <a className="nav__link" href="#featured">
              Featured
            </a>
          </li>
          <li className="nav__links">
            <button onClick={() => setShow(true)} className="contact">
              Contact
            </button>
            <Modal toggle={show} setShow={setShow} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
