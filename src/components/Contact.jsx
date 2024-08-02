import React from "react";
import toast from "react-hot-toast";
export default function Contact() {
  return (
    <div name="contact" className="bg-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-400 inline hover:text-blue-800">
            Contact me
          </p>
          <p className="py-6">Sumbit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <div  className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter you name"
              className="p-2 bg-transparent border-2 rounded-md
              text-white focus:outline-none"
            />
            <input
              type="text"
              name="Email"
              placeholder="Enter you Email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md
              text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="bg-transparent border-2 p-2 rounded-md focus:outline-none"
            />
            <div className="flex items-center justify-center mt-4">
            <button onClick={() =>{
              toast.success("form submitted SuccessFully")
            }}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
             bg-blue-800 cursor-pointer hover:shadow-lg hover:shadow-blue-900"
            >
              Let's talk
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
