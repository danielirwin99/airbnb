import React from "react";
import Logo from "../assets/Logo.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <figure className="footer__logo--wrapper">
          <img className="footer__logo" src={Logo} alt="" />
        </figure>
        <ul className="footer__list">
          <li className="footer__links">
            <a href="" className="footer__link">
              Home
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              About
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              Pricing
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              Contact Us
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              Reviews
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              Categories
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              Destinations
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              AirBnb Your Home
            </a>
          </li>
          <li className="footer__links">
            <a href="" className="footer__link">
              Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
