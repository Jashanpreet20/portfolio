import React, { useContext } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ThemeContext } from "./Context/ThemeProvider";
export default function Sociallinks() {
  const { theme } = useContext(ThemeContext);

  const links = [
    {
      id: 1,
      child: (
        <>
          <span className="text-xl">LinkedIn</span> <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/jashan-preet-singh-176951189",
    },
    {
      id: 2,
      child: (
        <>
          <span className="text-xl">Github </span>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Jashanpreet20",
    },
    {
      id: 3,
      child: (
        <>
          <span className="text-xl">Mail</span>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "https://docs.google.com/document/d/1eU429Be1-rXZGKL-UxpRvGr5rJSrgjlUfmWnh6aSsCs/edit?usp=sharing",
    },
    {
      id: 4,
      child: (
        <>
          <span className="text-xl">Resume</span>{" "}
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://docs.google.com/document/d/1eU429Be1-rXZGKL-UxpRvGr5rJSrgjlUfmWnh6aSsCs/edit?usp=sharing",
      // download:true
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul className="">
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className={`flex items-center justify-between w-40 h-14 px-4
              ml-[-100px] hover:ml-[-10px] duration-200 hover:rounded-md ${
                theme === "dark"
                  ? "bg-blue-800 text-white"
                  : "bg-green-600 text-black"
              }`}
          >
            <a
              className="flex justify-between items-center w-full "
              href={href}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
