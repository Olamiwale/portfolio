import React from 'react'

import { logo } from '../data'

export default function Home() {
  return (
    
       <div className='flex h-screen justify-center bg-slate-100 items-center'>
          <div className='w-3/4 md:w-full'>
         <div>
          <div className="flex flex-col justify-center items-center">
            <p className="uppercase"> let's build together</p>
            <p className="text-[25px] md:text-[40px] lg:text-[50px] flex flex-col justify-center items-center font-bold p-4">
              <span>Hi, I'm <span>Paul </span></span>
              <span className="custom-text text-center text-[2rem] lg:text-[4rem] md:text-[3rem] ">
                A Full stack Developer
              </span>
            </p>
            <p className="md:px-8 text-xl text-center lg:px-20">
              I'm a fullstack developer specializing in building and designing
              exceptional digital experience.
            </p>
          </div>

         <div className='flex justify-center my-[50px]'>

         
           
             <button className="bg-blue-800 text-white p-4 w-1/2 font-bold uppercase hover:bg-blue-700 rounded-lg">
              Contact me
            </button>
          
         </div>


         <div className="flex justify-center gap-20 my-[50px]">
          {logo.map((item, id)=>(
            <div className='bg-gray-200 rounded-md shadow-md p-3'> 
              <a href={item.link}
                  target="_blank"
                  rel="noreferrer"> 
              <img src={item.url} alt={item.id} className="w-[30px]" />
              </a>
            </div>
          ))}
         </div>
        </div>
      </div>
    </div>
  )
}



