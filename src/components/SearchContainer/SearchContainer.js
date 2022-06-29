import React from "react";
import "./index.css";
import NavigationIcon from "@mui/icons-material/Navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationIcon from "@mui/icons-material/AddLocation";
function SearchContainer() {
  return (
    <div className="main-container">
      <h1>Instantly book sports facilities</h1>

      <div className="search-container">
        <div className="inputs-container">
          <div className="location-input">
            <input
              className="search-input"
              type="text"
              placeholder="Location"
            />
            <button className="location-button">
              <AddLocationIcon />
            </button>
          </div>
          <select
            className="search-input"
            type="text"
            placeholder="Choose sport"
          >
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Tennis">Tennis</option>
            <option value="Snooker">Snooker</option>
            <option value="Swimming">Swimming</option>
            <option value="Volleyball">Volleyball</option>
          </select>
          <input
            className="search-input date-input"
            type="date"
            placeholder="Choose date"
          />
        </div>

        <button className="search-button btn">
          Search <SearchIcon />
        </button>
      </div>
      <button className="learn-more-btn btn">
        <KeyboardArrowDownIcon /> Learn more
      </button>
    </div>
  );
}

export default SearchContainer;
