import React from "react";
import ProjectProps from "../project/ProjectProps.jsx";





export default function Project() {
  
  return (
    <div id="projects"   
       className="flex items-center justify-center mt-[150px]" >


        <div className="p-10 flex justify-center flex-wrap">
          <ProjectProps
      image={'/'}
        title="Netflix clone"
        source="https://www.google.com"
        preview="https://www.yahoo.com"
      />
      <ProjectProps
      image={'/'}
        title="Facebook clone"
        source="https://www.facebook.com"
        preview="https://www.yahoo.com"
      />
      <ProjectProps
      image={'/'}
        title="Twiier clone"
        source="https://www.google.com"
        preview="https://www.yahoo.com"
      />
      <ProjectProps
      image={'/'}
        title="Twiier clone"
        source="https://www.google.com"
        preview="https://www.yahoo.com"
      />
        </div>
      
      
    </div>
  );
}
