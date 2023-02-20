import React from "react";
import "../styles/Testimonials.css";
import { IoMdStar } from "react-icons/io";
import {IoStarHalf} from 'react-icons/io5'

const Testimonials = () => {
  return (
    <div className="test__container">
      <h1 className="test__header">Testimonials</h1>
      <div className="test__carousel">
        <div className="test__card">
          <figure className="testImage__wrapper">
            <img
              className="testImage"
              src="https://smilequestdental.com/wp-content/uploads/2016/11/GettyImages-500394316.jpg"
              alt=""
            />
          </figure>
          <div className="test__description">
            <h2 className="test__name">Sally Monash</h2>
            <h3 className="test__para">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, enim.
            </h3>
            <div className="test__ratings">
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoStarHalf className="rating" />
            </div>
          </div>
        </div>
        <div className="test__card">
          <figure className="testImage__wrapper">
            <img
              className="testImage"
              src="https://smilequestdental.com/wp-content/uploads/2016/11/GettyImages-500394316.jpg"
              alt=""
            />
          </figure>
          <div className="test__description">
            <h2 className="test__name">Sally Monash</h2>
            <h3 className="test__para">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, enim."
            </h3>
            <div className="test__ratings">
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoStarHalf className="rating" />
            </div>
          </div>
        </div>
        <div className="test__card">
          <figure className="testImage__wrapper">
            <img
              className="testImage"
              src="https://smilequestdental.com/wp-content/uploads/2016/11/GettyImages-500394316.jpg"
              alt=""
            />
          </figure>
          <div className="test__description">
            <h2 className="test__name">Sally Monash</h2>
            <h3 className="test__para">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, enim.""
            </h3>
            <div className="test__ratings">
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoStarHalf className="rating" />
            </div>
          </div>
        </div>
        <div className="test__card">
          <figure className="testImage__wrapper">
            <img
              className="testImage"
              src="https://smilequestdental.com/wp-content/uploads/2016/11/GettyImages-500394316.jpg"
              alt=""
            />
          </figure>
          <div className="test__description">
            <h2 className="test__name">Sally Monash</h2>
            <h3 className="test__para">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, enim."
            </h3>
            <div className="test__ratings">
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoMdStar className="rating" />
              <IoStarHalf className="rating" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
