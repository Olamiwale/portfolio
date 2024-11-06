import React from "react";
import { Link, Element, animateScroll as scroll } from 'react-scroll';


export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="fixed z-50 bottom-0 border-t-4 shadow-lg w-full bg-gray-100">
      <div className="p-6 md:max-w-[1200px] flex m-auto justify-center">
       
        <div className="flex font-semibold space-x-10">
          <a  href="" className="hover:underline cursor-pointer">Linkedin</a>
          <a  href="" className="hover:underline cursor-pointer">Instagram</a>
          <a  href="" className="hover:underline cursor-pointer">X</a>
          <a  href="" className="hover:underline cursor-pointer">Facebook</a>
          
        </div>
      </div>
    
    </div>
  );
}
