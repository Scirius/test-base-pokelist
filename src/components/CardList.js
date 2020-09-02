import React from "react";
import { Link } from "react-router-dom";
import "./../css/CardList.css";

const CardList = (props) => {
  return (
    <div className="poke-card-list">
      <h1>{props.data.name}</h1>
      <Link to={`/detail/${props.data.name}`}>View Details</Link>
    </div>
  );
};
export default CardList;
