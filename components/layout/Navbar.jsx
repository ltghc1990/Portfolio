import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const Navbar = () => {
  const { route } = useRouter();

  const [active, setActive] = useState(null);

  // load selected nav depending on the bookmarked page
  useEffect(() => {
    if (route === "/") {
      setActive(1);
    } else {
      setActive(2);
    }
  }, [route]);

  // if route is a depency, then we might not need the selectedNav <--- TEST

  const selectedNav = (NavId) => {
    console.log(NavId);
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
            // onClick={() => selectedNav(1)}
            className={`p-2 border-2 border-white ${
              active === 1 && "border-gray-600 bg-gray-600 text-white"
            }`}
          >
            portfolio
          </a>
        </Link>
        <Link href="/AboutPage">
          <a
            // onClick={() => selectedNav(2)}
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
