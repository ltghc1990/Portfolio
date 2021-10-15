import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // problem where if we bookmark a different page and go to it, it'll still highlight portfolio due to it being a click event
  const [active, setActive] = useState(1);

  const selectedNav = (NavId) => {
    console.log("click");
    setActive(NavId);
  };

  return (
    <div className="flex justify-between py-4 font-semibold">
      <div>
        <div className="font-Playfair">Howell Chen</div>
      </div>
      <nav className="">
        <Link href="/">
          <a
            onClick={() => selectedNav(1)}
            className={`p-2 border-2 border-white ${
              active === 1 && "border-gray-600 bg-gray-600 text-white"
            }`}
          >
            portfolio
          </a>
        </Link>
        <Link href="/AboutPage">
          <a
            onClick={() => selectedNav(2)}
            className={`p-2 border-2 border-white ${
              active === 2 && "border-gray-600 bg-gray-600 text-white"
            }`}
          >
            about
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
