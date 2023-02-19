import React, { useState } from "react";
import "../styles/Modal.css";
import { ImCross } from "react-icons/im";

const Modal = ({children, show, setShow}) => {

  return (
    <div className="modal">
      <div className="modal__container">
        <ImCross className="cross" />
        <div className="modal__contents">
          <h1 className="modal__header">Contact Us</h1>
          <form className="modal__form" action="">
            <h2 className="email__header">Email</h2>
            <input
              className="email"
              type="email"
              placeholder="Enter your email.."
            />
            <h2 className="message__header">Message</h2>
            <textarea className="message" placeholder="Type anything here..." />
            <button className="submit__button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
