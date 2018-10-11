import React from "react";
import "./GifCard.css";

const GifCard = props => (
  <div className="img float-left">
    <div className="img-container">
      <img alt={props.name} src={props.image} className="img-thumbnail" data-id={props.id} onClick= {props.scoreGif}/>
    </div>
  </div>
);

export default GifCard;
