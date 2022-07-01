import React from "react";
import "./index.css";
import facilities from "../../facilities.json";
function ExploreItem(props) {
  return (
    <div className="explore-item">
      <img src={props.img} />
      <h3>{props.title} SPORT FACILITIES</h3>
      <p>
        If you’re looking to play sport in Sarajevo, we’ve got facilities
        catering for 18 sports across the capital including football pitches,
        tennis courts and swimming pools.
      </p>
      <span>FIND SPORTS FACILITIES</span>
    </div>
  );
}

export default ExploreItem;
