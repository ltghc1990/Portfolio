import React from "react";
import GridItem from "./GridItem";

// takes grid items and maps thru them tp project links
import projectList from "../store/projects";

const Grid = () => {
  return (
    <div className="gap-4 lg:gap-8 gridTwoColumn justify-center ">
      {projectList.map((item) => {
        return (
          <GridItem key={item.name} project={item} className=""></GridItem>
        );
      })}
    </div>
  );
};

export default Grid;
