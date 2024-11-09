import React from 'react'



export default function About() {
  return (

   <div className='md:py-60 py-20 bg-white justify-center items-center max-w-[1000px] mx-auto md:grid grid-cols-3 p-5 '>

    <div className='md:col-span-2'>
      <h1 className="font-bold  text-3xl">About</h1>
      <h2 className="py-4 font-semibold text-xl">Who I Am?</h2>
      <p className="tracking-wider leading-10 md:w-[500px] mt-10">
            I'm a frontend developer, currently expanding my skills to include  backend development. I specialize in crafting engaging user experiences using technologies such as React.js,  Next.js, Vue.js, HTML5, CSS3, and TailwindCSS.Additionally, I have proficiency in backend technologies like Node.js and Solidity. Throughout my
      </p>
      
      <button className="bg-blue-700 p-3 text-white uppercase mt-5 font-bold tracking-wider first-line:">Check out my projects
      </button>


    </div>
    
          <img
            src='../aboutImg.png'
            alt="About-Image"
            className="rounded-full w-full h-auto p-8 max-md:mt-20"
          />
    
     
   </div>

  
  )
}
 