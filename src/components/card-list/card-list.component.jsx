import React from "react";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div>
      {props.project.map((projects) => (
        <Card key={projects._id} project={projects} />
      ))}
    </div>
  );
};

export default CardList;
