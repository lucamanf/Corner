import React from "react";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        {props.projects.map((project) => (
          <Card key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
