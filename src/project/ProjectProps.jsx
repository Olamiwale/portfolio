import React from "react";

export default function ProjectProps({ title, source, preview, image }) {
  return (
  <div> 
 
    <div className="rounded-md space-x-5 m-4 p-2 group border-2">
      <div>
        <a href={"/"}>
          <div className="flex justify-center items-center group">
            <img
              className="rounded-md h-[100px] w-[300px]"
              src={image} alt="/"/>
          </div>
        </a>
      </div>

      <div className="flex justify-center py-4">
        <p className="text-xl">{title}
          </p></div>

      <div className="flex justify-between text-md">
       <button className=" border-2 py-1 px-2 rounded-sm"><a href={source}>Source Code</a>
        </button> 
       <button className="border-2 py-1 px-2 rounded-sm"><a href={preview}>Preview</a>
        </button> 
       
        
      </div>
    </div>
    </div>
  );
}
