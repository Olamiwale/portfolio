import React from 'react'
import { projectData } from '../data'

export default function Project() {
  return (
    <div className='py-60 bg-red-700 items-center max-w-[1000px] mx-auto p-5 justify-center'>
     
        <p className='font-bold text-3xl pb-5 flex'>Project</p>

        <div className='px-5 grid gap-5 md:grid-cols-2 justify-center items-center'>


          
        {projectData.map((item, id) => (
  <div className='flex flex-col items-center group' key={item.id}>
  
    <img
      src={item.img}
      className='relative group-hover:opacity-50 h-64 w-full transition-opacity duration-300'
      alt={item.name}
    />

  
    <div className='flex items-center justify-between opacity-0 group-hover:opacity-100 bg-slate-200 py-5 px-2 w-full transition-opacity duration-300'>
      <p className='py-2 font-semibold'>{item.name}</p> 

      <div className='flex space-x-5'>
        <a href={item.preview} className='flex justify-center items-center uppercase text-[10px] hover:underline font-semibold rounded-md'>
          Preview
        </a> 
        <a href={item.github} className='flex justify-center items-center uppercase text-[10px] hover:underline font-semibold'>
          GitHub
        </a> 
      </div>
    </div> 
  </div>
))}

          

         
        </div>
   
    </div>
  )
}
