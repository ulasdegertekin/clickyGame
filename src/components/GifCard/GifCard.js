import React from "react";
import "./GifCard.css";

const GifCard = props => (
  <div className="img">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    
   
  </div>
);

export default GifCard;
