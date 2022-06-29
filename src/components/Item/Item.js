import React from "react";
import "./index.css";
import itemImg from "./img/football1.jpg";
import facilities from "../../facilities.json";

function Item(props) {
  return (
    <div className="item">
      <img src={props.img} alt="football-pitch" />
      <div className="item-description">
        <p className="item-title">FIS Sport</p>
        <ul className="item-assets">
          <li>&#9873; 0.3km away</li>
          <li>&#10003; Changing room</li>
        </ul>
        <p className="book-today">BOOK TODAY</p>
      </div>
    </div>
  );
}

export default Item;
