import React from "react";
import "./index.css";
import facilities from "../../facilities.json";

function Item(props) {
  return (
    <div className="item">
      <img src={props.img} alt="football-pitch" />
      <div className="item-description">
        <p className="item-title">{props.title}</p>
        <ul className="item-assets">
          <li>&#9873; {props.assets[0]}km away</li>
          <li>&#10003; {props.assets[1]}</li>
        </ul>
        <p className="book-today">BOOK TODAY</p>
      </div>
    </div>
  );
}

export default Item;
