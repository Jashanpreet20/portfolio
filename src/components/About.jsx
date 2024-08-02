import React from "react";

export default function About() {
  return (
    <div name="about"  className="w-full bg-black text-white ">
      <div className="max-w-screen-lg flex flex-col items-start justify-center w-full h-full p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:text-blue-800">
            About
          </p>
        </div>
        <p className="text-xl mt-2 mb-16">
        Graduated with a degree in Computer Science with hands-on experience
            in building responsive web applications using the MERN stack
            (MongoDB, Express.js, React.js, Node.js). Proficient in developing
            both front-end and back-end components.Solving complex problems, and
            continuously learning new technologies. Strong foundation in Full
            Stack Developer and modern frameworks such as Tailwind CSS, with a
            passion for creating scalable and efficient solutions
        </p>
        <br />
      </div>
    </div>
  );
}
