import React from 'react'
import Node from '../assets/logo/node.png';
import firebase from '../assets/logo/firebase.png';
import mongo from '../assets/logo/mongo.png';
import nextjs from '../assets/logo/nextjs.png';
import react from '../assets/logo/react.png';
import aws from '../assets/logo/aws.png';
import tailwind from '../assets/logo/tailwind.png';
import SkillLogo from './SkillLogo';

export default function Skill({logo, title}) {
  return (
    <div  className="h-screen justify-center items-center flex flex-col mt-20">
      <p>These are the tools i work with </p>
      <div className='flex flex-wrap justify-center gap-4 p-10'>

<SkillLogo logo={Node} title='Node' />
<SkillLogo logo={firebase} title='firebase' />
<SkillLogo logo={Node} title='Node' />
<SkillLogo logo={mongo} title='mongo' />
<SkillLogo logo={nextjs} title='nextjs' />
<SkillLogo logo={react} title='react' />
<SkillLogo logo={aws} title='aws' />
<SkillLogo logo={tailwind} title='Tailwind' />




     
      </div>
    </div>
  )
}
