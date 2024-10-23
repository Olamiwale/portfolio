import React from "react";

export default function ProjectProps({ title, source, preview, image }) {
  return (
  
 
    <div className="rounded-sm space-x-5 m-4 p-2 group border-2 group">
      <div className="flex justify-center items-center">
        <a href={"/"}>
          <div className="flex justify-center items-center group">
            <img
              className="rounded-md h-[100px] group-hover:opacity-10 w-[350px]"
              src={image} alt="/"/>
          </div>
        </a>
      </div>

      <div className="flex justify-center opacity-10 group-hover:opacity-80 py-4">
        <p className="text-xl">{title}</p>
      </div>

      <div className="flex justify-between opacity-5 group-hover:opacity-100">
      
        <a href={source} className="border-2 p-2" >Source code</a>
      
      
        <a href={preview} className="border-2 p-2 ">Preview</a>
       
       
        
      </div>
    </div>
    
  );
}



