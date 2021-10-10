import React from "react";
// motion import and motion obj from lib
import { motion } from "framer-motion";
import { parentGridVariant } from "../lib/framerMotion";
import GridItem from "./GridItem";

// takes grid items and maps thru them tp project links
import projectList from "../store/projects";

const Grid = () => {
  return (
    <motion.div
      variants={parentGridVariant}
      initial="initial"
      animate="animate"
      className="gap-4 lg:gap-8 gridTwoColumn justify-center "
    >
      {projectList.map((item) => {
        return (
          <GridItem key={item.name} project={item} className=""></GridItem>
        );
      })}
    </motion.div>
  );
};

export default Grid;
