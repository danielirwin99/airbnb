import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Home from "../pages/Home";
import "../styles/Nav.css";
import Modal from "./Modal";
import SearchBar from "./SearchBar";

const BookingNavBar = () => {
  const [show, setShow] = useState(false);

  const home = () => {
    if (!Home) {
      return false;
    }
  };
  return (
    <nav>
      <div className="nav__container">
        <figure className="nav__logo">
          <img className="logo" src={Logo} alt="Logo" />
        </figure>
        <SearchBar />
        <ul className="nav__list">
          <li className="nav__links">
            <Link to="/" className="nav__link booking">
              Home
            </Link>
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

export default BookingNavBar;
