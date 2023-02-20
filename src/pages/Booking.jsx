import React from "react";
import BookingNavBar from "../components/BookingNavBar";
import Nav from "../components/Nav";
import "../styles/Booking.css";
import Secondary4 from "../assets/Secondary4.jpg";

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
                <h2 className="booking__details--header">
                  How many nights?
                </h2>
                <input className="booking__details--input" type="number" />
              </div>
              <div className="booking__details">
                <h2 className="booking__details--header">
                  How Many Guests?
                </h2>
                <input className="booking__details--input" type="number" />
              </div>
              <div className="booking__details">
                <h2 className="booking__details--header">
                  How many nights?
                </h2>
                <input className="booking__details--input" type="number" />
              </div>
              <div className="booking__details">
                <h2 className="booking__details--header">
                  How many nights?
                </h2>
                <input className="booking__details--input" type="number" />
              </div>
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
          <div className="figure">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default booking;
