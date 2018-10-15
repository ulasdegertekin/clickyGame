import React from "react";
import "./GifCard.css";

const GifCard = props => (
  <div class="container">

    <div className="img float-left">
      <div className="img-container">
        <img alt={props.name} src={props.image} className="img-thumbnail rounded-circle" data-id={props.id} onClick={props.scoreGif} />
      </div>
    </div>
  </div>
);

export default GifCard;
