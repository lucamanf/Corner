import React from "react";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="container px-5 py-0.5 mx-auto">
      <div className="flex flex-wrap -m-4">
        {props.projects.map((project) => (
          <Card key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
