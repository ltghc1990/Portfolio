import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  // remember to replace h screen since its diff depending on device
  return (
    <div className="h-full mx-auto max-w-screen-2xl">
      <div className="px-4 md:px-8 lg:px-10 xl:px-12">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
