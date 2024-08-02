import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import javapng from '../assets/javapng.png'
import mongo from '../assets/mongo.png';

export default function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      href:"https://www.w3schools.com/html/"
      
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      href:"https://www.w3schools.com/css/"
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
      href:"https://www.w3schools.com/js/"
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
      href:"https://react.dev/"
    },
    {
      id: 5,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
      herf:"https://tailwindcss.com/"
    },
    {
      id: 6,
      src: node,
      title: "NODE",
      style: "shadow-white",
      href:"https://nodejs.org/en"
    },
    {
      id: 7,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
      href:"https://github.com/"
    },
    {
      id: 8,
      src: javapng,
      title: "Java",
      style: "shadow-blue-300",
      href:"https://www.java.com/en/"
    },
    {
      id: 9,
      src: mongo,
      title: "MONGO",
      style: "shadow-green-300",
      href:"https://www.mongodb.com/"
    },
  ];
  return (
    <div name="experience" className="bg-black w-full h-screen mt-10">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white">
        <div>
          <p className="text-white font-bold text-4xl border-b-4 border-gray-500 p-2 inline hover:text-blue-800">
            Experience
          </p>
          <p className="py-6">These are the technologies i have worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style,href }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer ${style}`}
            >
              <img src={src} alt="html" className="mx-auto w-20" />
              <a href={href} target="_blank">{title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
