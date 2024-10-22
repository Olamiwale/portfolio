import React from 'react'

export default function SkillLogo({logo, title}) {
  return (
   
    <div className="flex justify-center ">
      <div className="flex flex-col gap-3 items-center border-2 py-8 px-16">
        <img src={logo} width={40} height={40} alt="/" className='' />
        <h3 className="text-[10px] font-semibold ">{title}</h3>
        
      </div>
    </div>
   
  )
}