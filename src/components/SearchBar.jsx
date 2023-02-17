import React from "react";
import "../styles/SearchBar.css";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
  return (
    <form className="searchBar" action="">
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search Properties"
      />
      <button className="searchBar__button">
        <BiSearchAlt2 />
      </button>
    </form>
  );
};

export default SearchBar;
