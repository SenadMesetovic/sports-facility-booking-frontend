import { React, useState } from "react";
import "./index.css";
import Item from "../Item/Item.js";
import facilities from "../../facilities.json";
import sportsList from "../../sportsList.json";

function ItemsNearbyList() {
  const [activeSport, setActiveSport] = useState(sportsList.mostPopular[0]);

  function handleClickOnNav(e) {
    setActiveSport(e.target.id);
  }

  return (
    <div className="items-nearby-container">
      <h2>Most popular sports facilities near you</h2>
      <div className="items-with-nav">
        <nav className="items-nearby-nav">
          <ul>
            {sportsList.mostPopular.map((sportName) => {
              return (
                <li
                  key={sportName}
                  id={sportName}
                  className={sportName === activeSport ? "active" : ""}
                  onClick={handleClickOnNav}
                >
                  {sportName}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="items">
          {facilities[activeSport.toLowerCase()].map((fields) => {
            return (
              <Item
                key={fields.name}
                img={fields.img}
                title={fields.name}
                assets={fields.assets}
              />
            );
          })}
        </div>
        <a href="">See more</a>
      </div>
    </div>
  );
}

export default ItemsNearbyList;
