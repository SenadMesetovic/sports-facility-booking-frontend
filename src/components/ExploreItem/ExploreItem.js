import React from "react";
import "./index.css";
function ExploreItem(props) {
  return (
    <div className="explore-item">
      <img src={props.img} />
      <h3>{props.title} SPORT FACILITIES</h3>
      <p>{props.description}</p>
      <span>FIND SPORTS FACILITIES</span>
    </div>
  );
}

export default ExploreItem;
