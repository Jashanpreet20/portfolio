import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center max-w-[900px] mx-auto h-10 text-white bg-black">
      <h1 className="text-6xl mt-10 font-signature ml-2 text-blue-800">Jashan</h1>

      <ul className="hidden md:flex">
        {links.map((item) => {
          return (
            <li
              key={item.id}
              className="px-4 cursor-pointer capitalize hover:text-blue-800 hover:font-bold hover:scale-125 duration-200 font-medium"
            >
              <Link to={item.link} smooth duration={500}>
                {item.link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col items-center justify-center absolute w-full
       h-screen top-0 left-0 bg-gradient-to-b from-black to-gray-500"
        >
          {links.map((item) => {
            return (
              <li
                key={item.id}
                className="px-4 text-white cursor-pointer capitalize hover:scale-105 duration-200 font-medium"
              >
                {item.link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
