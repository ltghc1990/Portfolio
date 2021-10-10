import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(1);

  const selectedNav = (NavId) => {
    console.log("click");
    setActive(NavId);
  };

  return (
    <div className="flex font-semibold justify-between py-4">
      <div>
        <div>Howell Chen</div>
      </div>
      <nav className="">
        <Link href="/">
          <a
            onClick={() => selectedNav(1)}
            className={`p-2 border-2 border-white ${
              active === 1 && "border-gray-900 bg-gray-600 text-white"
            }`}
          >
            portfolio
          </a>
        </Link>
        <Link href="/AboutPage">
          <a
            onClick={() => selectedNav(2)}
            className={`p-2 border-2 border-white ${
              active === 2 && "border-gray-900 bg-gray-600 text-white"
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
