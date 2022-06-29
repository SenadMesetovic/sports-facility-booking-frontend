import React from "react";
import "./index.css";
import Item from "../Item/Item.js";
import facilities from "../../facilities.json";
import image from "../Item/img/football2.jpg";
function ItemsNearbyList() {
  return (
    <div className="items-nearby-container">
      <h2>Most popular sports facilities near you</h2>
      <div className="items-with-nav">
        <nav className="items-nearby-nav">
          <ul>
            <li>Football</li>
            <li>Basketball</li>
            <li>Tennis</li>
            <li>Golf</li>
            <li>Swiming</li>
            <li>Snooker</li>
          </ul>
        </nav>
        <div className="items">
          <Item img={facilities.football[0].img} />
          <Item img={facilities.football[1].img} />
          <Item img={facilities.football[2].img} />
          <Item img={facilities.football[3].img} />
        </div>
      </div>
    </div>
  );
}

export default ItemsNearbyList;
