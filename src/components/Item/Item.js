import React from "react";

function Item() {
  return (
    <div class="item">
      <img src="./img/football1.jpg" alt="football-pitch" />
      <div class="item-description">
        <p class="item-title">FIS Sport</p>
        <ul class="item-assets">
          <li>&#9873; 0.3km away</li>
          <li>&#10003; Changing room</li>
        </ul>
        <p class="book-today">BOOK TODAY</p>
      </div>
    </div>
  );
}

export default Item;
