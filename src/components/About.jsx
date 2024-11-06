import React from "react";

export default function About() {
  return (
    <div className="mt-[3000px] justify-center lg:px-40 items-center">
       <h1 className="font-bold py-10">About Me</h1>
      <div className="grid md:grid-cols-2 gap-5">
       

        <div className="space-y-5">
          <h1 className="font-bold">Hello, Welcome</h1>

          <p className="leading-7 tracking-wider ">
            There are many variation of passages of lorem ipsum variation of
            passages of lorem ipsum variation of passages of lorem ipsum
            variation of passages of lorem ipsum variation of passages of lorem
            ipsum
          </p>

          <button className="bg-slate-900 rounded-md w-[200px] text-gray-400 px-6 py-4">
            Contact Me
          </button>
        </div>

        <div className="bg-gray-300">
          <img
            src="https://via.placeholder.com/500x500.png"
            alt="Contact us"
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
