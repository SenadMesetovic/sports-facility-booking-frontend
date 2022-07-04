import React from "react";
import ExploreItem from "../ExploreItem/ExploreItem";

function ExploreItemsContainer() {
  return (
    <div>
      <h2>FIND YOUR PLAY</h2>
      <p>
        Find sports facilities from football pitches to tennis courts in a range
        of cities across the UK and Ireland
      </p>
      <div className="flex-item">
        <ExploreItem
          img="/images/fullsize/sarajevo.jpg"
          title="SARAJEVO"
          description="If you’re looking to play sport in Sarajevo, we’ve got facilities
        catering for 18 sports across the capital including football pitches,
        tennis courts and swimming pools."
        />
        <ExploreItem
          img="/images/fullsize/mostar.jpg"
          title="MOSTAR"
          description="If you’re looking to play sport in Sarajevo, we’ve got facilities
        catering for 18 sports across the capital including football pitches,
        tennis courts and swimming pools."
        />
        <ExploreItem
          img="/images/fullsize/banjaluka.jpg"
          title="BANJA LUKA"
          description="If you’re looking to play sport in Sarajevo, we’ve got facilities
        catering for 18 sports across the capital including football pitches,
        tennis courts and swimming pools."
        />
      </div>
    </div>
  );
}

export default ExploreItemsContainer;
