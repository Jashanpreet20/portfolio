import React from "react";

import chat from "../assets/portfolio/chat.png";
import expense from "../assets/portfolio/expense.png";
import dice from "../assets/portfolio/dice.png";
import tic from "../assets/portfolio/tic.png";
import cv from "../assets/portfolio/cv.png";
import classroom from "../assets/portfolio/classroom.png";


export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: chat,
      title: "Chat Application",
      demo: "https://github.com/Jashanpreet20/chat-app-aws",
      link: "https://github.com/Jashanpreet20/chat-app-aws",
    },
    {
      id: 2,
      src: expense,
      title: "Expense Tracker app",
      demo: "https://github.com/Jashanpreet20/aws-deploy-expanse",
      link: "https://github.com/Jashanpreet20/aws-deploy-expanse",
    },
    {
      id: 3,
      src: dice,
      title: "Dice roller app",
      demo: "https://github.com/Jashanpreet20/DiceRoll-flutter",
      link: "https://github.com/Jashanpreet20/DiceRoll-flutter",
    },
    {
      id: 4,
      src: tic,
      title: "Tic-Tac-Toe",
      demo: "https://tic-tac-toe-ashen-eta.vercel.app",
      link: "https://github.com/Jashanpreet20/tic-tac-toe",
    },
    {
      id: 5,
      src: classroom,
      title: "Ed-Tech Application",
      demo: "https://study-notion-eight-pi.vercel.app/",
      link: "https://github.com/Jashanpreet20/studyNotion",
    },
    {
      id: 6,
      src: cv,
      title: "Portfolio Web Application",
      demo: "https://portfolio-xi-wine-31.vercel.app/",
      link: "https://github.com/Jashanpreet20/portfolio",
    },
  ];
  return (
    <div name="portfolio" className="bg-black w-full mt-16 text-white md:h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-r-gray-500 hover:text-blue-800">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, link, demo }) => (
            <div key={id} className="shadow-md rounded-lg shadow-gray-600">
              <p className="text-2xl text-white mb-3 text-center">{title}</p>
              <img
                className="rounded-md hover:scale-105 duration-200 px-10"
                src={src}
                alt="arraydestruct"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  className="w-1/2 m-4 px-6 py-3 duration-200 hover:scale-105 capitalize cursor-pointer"
                >
                  demo
                </a>
                <a href={link} target="_blank" className="w-1/2 m-4 px-6 py-3 cursor-pointer duration-200 hover:scale-105 capitalize">
                  code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
