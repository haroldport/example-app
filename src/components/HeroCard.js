import React from "react";
import { Link } from "react-router-dom";

const HeroCard = props => (
  <div className="col s12 m4">
    <div className="card blue-grey darken-1">
      <div className="card-image">
        <img
          className="App-image"
          src={`${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`}
          alt={props.name}
        />
        <span className="card-title bg-card">{props.hero.name}</span>
      </div>
      <div className="card-action">
        <Link to={`/${props.hero.id}`}>More info...</Link>
      </div>
    </div>
  </div>
);

export default HeroCard;
