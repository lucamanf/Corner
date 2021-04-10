import React from "react";

export const Card = (props) => {
  <div>
    <img src={`https://robohash.org/1?set=set2&size=180x180`} alt="progetto" />
    <h2>{props.project.titolo}</h2>
    <p>{props.project.descrizione}</p>
  </div>;
};

export default Card;
