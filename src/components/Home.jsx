import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    
      <div className="h-screen justify-center items-center flex">
        <div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[25px] md:text-[40px] lg:text-[50px] flex flex-col justify-center items-center font-bold p-4">
              <span>
                Hi, I'm <span>Paul </span>
              </span>
              <span className="custom-text text-center text-[2rem] lg:text-[4rem] md:text-[3rem] ">
                A Full stack Developer
              </span>
            </p>
          </div>

          <Link to="/contact" className="flex justify-center mt-5 p-2">
            <button className="bg-blue-800 transition-all duration-500 text-white p-4 w-full font-bold uppercase hover:bg-blue-700 rounded-lg">
              Contact me
            </button>
          </Link>

          <div className="mt-20">
            <div className="flex justify-evenly items-center">
              <a
                href="https://github.com/Olamiwale"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./github.png"
                  alt="link"
                  className="w-[40px] shadow-lg shadow-black rounded-lg"
                />
              </a>

              <a
                href="https://x.com/Paulolawalee"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./X.png"
                  alt="link"
                  className="w-[40px] shadow-lg shadow-black rounded-lg"
                />
              </a>

              <a
                href="https://github.com/Olamiwale"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./cv.png"
                  alt="link"
                  className="w-[40px] shadow-lg shadow-black rounded-lg"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/paul-ogunmakinju-9236b51a3/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./linkdlin.png"
                  alt="link"
                  className="w-[40px] shadow-lg shadow-black rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    
  );
}
