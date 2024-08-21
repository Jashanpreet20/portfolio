import React, { useContext } from "react";
import hero from "../assets/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { ThemeContext } from "./Context/ThemeProvider";
export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      name="home"
      className={`flex w-full h-full ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-8">
        <div>
          <h2 className="text-4xl sm:7xl font-bold">
            Full Stack{" "}
            <span
              className={`${
                theme === "dark" ? "text-blue-800" : "text-green-600"
              }`}
            >
              Developer
            </span>
          </h2>
          <p
            className={`py-4 text-xl px-2 ${
              theme === "dark" ? " text-gray-400" : "text-black"
            }`}
          >
            Graduated with a degree in Computer Science with hands-on experience
            in building responsive web applications using the MERN stack
            (MongoDB, Express.js, React.js and Node.js). Proficient in
            developing both front-end and back-end components. Solving complex
            problems, and continuously learning new technologies. Strong
            foundation in Full Stack Developer and modern frameworks such as
            Tailwind CSS, with a passion for creating scalable and efficient
            solutions...
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className={`group  text-xl font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md
              cursor-pointer  
             ${
               theme === "dark"
                 ? "bg-blue-800 text-white shadow-lg shadow-blue-900"
                 : "bg-green-500 text-black shadow-lg shadow-green-900"
             }`}
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
