import React from "react";
import Nav from "../components/Nav";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home__container">
      <div className="topBar__container">
        <div />
        <h1 className="topBar__header"> Australia's No.1 Airbnb Platform</h1>
        <h2 className="topBar__subHeader">Learn more</h2>
      </div>
      <Nav />
    </div>
  );
};

export default Home;
