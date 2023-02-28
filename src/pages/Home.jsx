import React, { useState,Suspense } from "react";
import Nav from "../components/Nav";
import "../styles/Home.css";
import { AiFillHome } from "react-icons/ai";
import { FaCity, FaUmbrellaBeach } from "react-icons/fa";
import { GiCampingTent, GiSittingDog } from "react-icons/gi";
import { BsFillTreeFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Listings from "../components/Listings";
import Footer from "../components/Footer";
import Featured from "../assets/Featured.jpg";
import Secondary1 from "../assets/Secondary1.jpg";
import Secondary2 from "../assets/Secondary2.jpg";
import Secondary3 from "../assets/Secondary3.jpg";
import Secondary4 from "../assets/Secondary4.jpg";
import Testimonials from "../components/Testimonials";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const Home = ({toggleModal}) => {

  return (
    <div className="home__container">
      {/* Above the Navbar */}
      <div className="topBar__container">
        <div />
        <h1 className="topBar__header"> Australia's No.1 Airbnb Platform</h1>
        <a href="" className="topBar__link">
          Learn more
        </a>
      </div>
      {/* NavBar */}
      <Nav toggleModal={toggleModal} />
      {/* Toggling */}
      <Modal />
      {/* Menu Icons */}
      <div className="menu">
        <ul className="menu__list">
          <li className="menu__links">
            <a className="menu__link" href="">
              <AiFillHome className="menu__icon bnbcolor" />
              <span className="menu__description">House</span>
            </a>
          </li>
          <li>
            <a className="menu__link" href="">
              <FaCity className="menu__icon bnbcolor" />
              <span className="menu__description">City</span>
            </a>
          </li>
          <li>
            <a className="menu__link" href="">
              <GiCampingTent className="menu__icon bnbcolor" />
              <span className="menu__description">Camping</span>
            </a>
          </li>
          <li>
            <a className="menu__link" href="">
              <FaUmbrellaBeach className="menu__icon bnbcolor" />
              <span className="menu__description">Beach</span>
            </a>
          </li>
          <li>
            <a className="menu__link" href="">
              <BsFillTreeFill className="menu__icon bnbcolor" />
              <span className="menu__description">Trees</span>
            </a>
          </li>
          <li>
            <a className="menu__link" href="">
              <GiSittingDog className=" menu__icon bnbcolor" />
              <span className="menu__description">Dog Friendly</span>
            </a>
          </li>
        </ul>
      </div>
      <Listings />
      <div id="featured">
        <h2>Featured</h2>
        <div className="featured__images">
          <div className="featured__secondary">
            <figure className="secondaryImage__wrapper">
              <img className="secondaryImage" src={Secondary1} alt="" />
            </figure>
            <figure className="secondaryImage__wrapper">
              <img className="secondaryImage" src={Secondary2} alt="" />
            </figure>
            <figure className="secondaryImage__wrapper">
              <img className="secondaryImage" src={Secondary3} alt="" />
            </figure>
            <figure className="secondaryImage__wrapper">
              <img className="secondaryImage" src={Secondary4} alt="" />
            </figure>
          </div>
          <div className="featured__main">
            <img className="featuredImage" src={Featured} alt="" />
            <div className="featured__background" />
            <div className="featured__description">
              <h1 className="featured__header">Seashell Oasis</h1>
              <div className="ratings">
                <AiFillStar className="rating" />
                <AiFillStar className="rating" />
                <AiFillStar className="rating" />
                <AiFillStar className="rating" />
                <AiFillStar className="rating" />
              </div>
              <h2 className="featured__sub-header">
                "Enjoy all the luxuries of an exquisite house with the beach
                right on your doorstep."
              </h2>
              <h3 className="featured__price">Starting from $749 per night</h3>
              <Link to="/booking">
                <button className="featured__button">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="popular">
        <h2>Popular</h2>
        <div className="featured__images">
          <div className="featured__main">
            <img className="featuredImage" src={Secondary2} alt="" />
            <div className="featured__background" />
            <div className="featured__description">
              <h1 className="featured__header"> Imperial Inn</h1>
              <div className="ratings">
                <AiFillStar className="rating" />
                <AiFillStar className="rating" />
                <AiFillStar className="rating" />
                <AiFillStar className="rating" />
                <AiFillStar className="rating" />
              </div>
              <h2 className="featured__sub-header popular">
                The Imperial Inn offers an unforgettable luxury experience. With
                its impeccable attention to detail and breathtaking location,
                it's the perfect destination for those seeking the ultimate in
                comfort and indulgence.
              </h2>
              <h3 className="featured__price">Starting from $749 per night</h3>
              <Link to="/booking">
                <button className="featured__button">Book Now</button>
              </Link>
            </div>
          </div>
          <div className="featured__secondary">
            <figure className="secondaryImage__wrapper">
              <img className="secondaryImage" src={Secondary4} alt="" />
            </figure>
            <figure className="secondaryImage__wrapper">
              <img className="secondaryImage" src={Secondary3} alt="" />
            </figure>
            <figure className="secondaryImage__wrapper">
              <img className="secondaryImage" src={Secondary2} alt="" />
            </figure>
            <figure className="secondaryImage__wrapper">
              <img className="secondaryImage" src={Secondary1} alt="" />
            </figure>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
