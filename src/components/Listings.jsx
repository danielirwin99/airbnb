import React, { useEffect, useState } from "react";
import "../styles/Listings.css";
import { AiFillStar } from "react-icons/ai";
import House from "../assets/house.jpg";
import Beach from "../assets/beach.jpg";
import City from "../assets/city.jpg";
import DogFriendly from "../assets/dogfriendly.jpg";
import Camping from "../assets/camping.jpg";
import House1 from "../assets/house1.jpg";
import House2 from "../assets/house2.jpg";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Listings = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading__container">
          <div className="spinner__container">
            <div className="spinner" />
            <div className="spinner" />
          </div>
        </div>
      ) : (
        <div className="listings">
          <div className="card">
            <div className="image__container">
              <img className="image" src={House} alt="House" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={Beach} alt="Beach" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={House2} alt="House2" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={Camping} alt="Camping" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={City} alt="City" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={DogFriendly} alt="Dog Friendly" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={House1} alt="House1" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={House} alt="House" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={House} alt="House" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={House} alt="House" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={House} alt="House" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
          <div className="card">
            <div className="image__container">
              <img className="image" src={House} alt="House" />
              <div className="image__background" />
              <Link to="/booking">
                <button className="book__now">Book Now</button>
              </Link>
            </div>
            <div className="headerAndRatings">
              <h2 className="card__header">City , State</h2>
              <div className="card__rating--wrapper">
                <h2 className="card__rating">4.7</h2>
                <AiFillStar className="rating" />
              </div>
            </div>
            <h3 className="card__company">Hosted by Reality Group, LLC</h3>
            <h3 className="card__date">April 1-8th</h3>
            <h3 className="card__price">$749 / Night</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Listings;
