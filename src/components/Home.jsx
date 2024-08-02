import React from "react";
import hero from "../assets/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
export default function Home() {
  return (
    <div name="home" className="flex h-screen w-full bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-8">
        <div>
          <h2 className="text-4xl sm:7xl font-bold text-white">
            Full Stack <span className="text-blue-800">Developer</span>
          </h2>
          <p className="text-gray-400 py-4 text-xl px-2">
            Graduated with a degree in Computer Science with hands-on experience
            in building responsive web applications using the MERN stack
            (MongoDB, Express.js, React.js and Node.js). Proficient in developing
            both front-end and back-end components. Solving complex problems, and
            continuously learning new technologies. Strong foundation in Full
            Stack Developer and modern frameworks such as Tailwind CSS, with a
            passion for creating scalable and efficient solutions...
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white text-xl font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md
             bg-blue-800 cursor-pointer  shadow-lg shadow-blue-900"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                {
                  <MdOutlineKeyboardArrowRight
                    size={25}
                    className="ml-1"
                  ></MdOutlineKeyboardArrowRight>
                }
              </span>
            </Link>
          </div>
        </div>
        <img
          className="rounded-full w-2/3 md:w-[300px] h-[300px] shadow-2xl shadow-blue-950 "
          src={hero}
          alt="my profile"
        />
      </div>
    </div>
  );
}
