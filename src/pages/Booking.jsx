import React, { useState } from "react";
import BookingNavBar from "../components/BookingNavBar";
import Nav from "../components/Nav";
import "../styles/Booking.css";
import Beach from "../assets/beach.jpg";
import Secondary1 from "../assets/Secondary1.jpg";
import Secondary2 from "../assets/Secondary2.jpg";
import Secondary4 from "../assets/Secondary4.jpg";
import Featured from "../assets/Featured.jpg";

const booking = () => {

  return (
    <>
      <BookingNavBar />
      <div className="booking__container">
        <div className="booking__row">
          <div className="booking__firstHalf">
            <h1 className="booking__header">Booking</h1>
            <div className="booking__description">
              <div className="booking__details">
                <h2 className="booking__details--header">How many nights?</h2>
                <input className="booking__details--input" type="number" />
              </div>
              <div className="booking__details">
                <h2 className="booking__details--header">How many guests?</h2>
                <input className="booking__details--input" type="number" />
              </div>
              <div className="booking__details">
                <h2 className="booking__details--header">Date of Arrival?</h2>
                <button
                  onClick={() =>
                    alert("Have not implemented dynamic calendar yet")
                  }
                  className="calendar"
                >
                  Date
                </button>
              </div>
              <button className="availability">Check Availability</button>
            </div>
          </div>
          <div className="booking__secondHalf">
            <figure className="booking__image--wrapper">
              <img className="booking__image" src={Secondary4} alt="" />
            </figure>
          </div>
        </div>
        <div className="booking__recommend">
          <h1 className="booking__recommend--header">
            Recommendations for You
          </h1>
          <div className="booking__image--container">
            <figure className="booking__recommend--wrapper">
              <img className="booking__recommend--image" src={Beach} alt="" />
            </figure>
            <figure className="booking__recommend--wrapper">
              <img
                className="booking__recommend--image"
                src={Secondary1}
                alt=""
              />
            </figure>
            <figure className="booking__recommend--wrapper">
              <img
                className="booking__recommend--image"
                src={Secondary2}
                alt=""
              />
            </figure>
            <figure className="booking__recommend--wrapper">
              <img
                className="booking__recommend--image"
                src={Featured}
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default booking;
