import React from "react";

import Image from "next/image";

// gets stuff from grids which we can then display

const GridItem = ({ project }) => {
  return (
    <div className="cursor-pointer">
      <a href={project.link}>
        <Image
          src={`/${project.image}`}
          width="400px"
          height="300px"
          objectFit="cover"
          alt={"image description"}
        />
        <p className=" font-semibold ">{project.name}</p>
      </a>
    </div>
  );
};

export default GridItem;
