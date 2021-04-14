import React from "react";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="container m-7 px-5 py-0.5 mx-auto ">
      <div className="grid flex-wrap gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {props.projects.map((project) => (
          <Card key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
