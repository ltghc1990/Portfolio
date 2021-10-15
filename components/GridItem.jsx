import React from "react";
import { motion } from "framer-motion";
import { childGridItemVariant, gridItemHover } from "../lib/framerMotion";

import Image from "next/image";

// gets stuff from grid which we can then display

const GridItem = ({ project }) => {
  return (
    <motion.div
      variants={childGridItemVariant}
      whileHover={gridItemHover}
      className="cursor-pointer"
    >
      <a href={project.link}>
        <Image
          src={`/${project.image}`}
          width="400px"
          height="300px"
          objectFit="cover"
          alt={"image description"}
        />
        <p className="font-semibold">{project.name}</p>
      </a>
    </motion.div>
  );
};

export default GridItem;
