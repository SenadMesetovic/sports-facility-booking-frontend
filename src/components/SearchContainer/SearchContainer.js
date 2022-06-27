import React from "react";
import "./index.css";
import NavigationIcon from "@mui/icons-material/Navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SearchContainer() {
  return (
    <div className="main-container">
      <h1>Instantly book sports facilities</h1>

      <div className="search-container">
        <input className="search-input" type="text" placeholder="Location" />
        <button className="location-button">
          <NavigationIcon />
        </button>
        <input
          className="search-input"
          type="text"
          placeholder="Choose sport"
        />
        <input className="search-input" type="date" placeholder="Choose date" />

        <button className="search-button btn">
          Search <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <button className="learn-more-btn btn">
        <KeyboardArrowDownIcon /> Learn More
      </button>
    </div>
  );
}

export default SearchContainer;
