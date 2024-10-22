import React from 'react';
import { useNavigate } from 'react-router-dom';;

export default function Header() {
const navigate = useNavigate();

  return (
    <header className='fixed top-0 w-full justify-between lg:py-10 px-60  max-lg:p-10 bg-slate-600 text-white flex'>
      <div>
        Logo
      </div>
      <nav>
        <ul className='flex max-lg:space-x-6 lg:space-x-16 '>
          <li className='cursor-pointer' onClick={() => navigate('/')}>Home</li>
          <li className='cursor-pointer'  onClick={() => navigate('/about')}>About</li>
          <li className='cursor-pointer' onClick={()=>navigate('/skill')}>Skill</li>
          <li className='cursor-pointer' onClick={() => navigate('/project')}>Project</li>
          <li className='cursor-pointer' onClick={()=> navigate('/contact')}>Contact</li>
        </ul>
       
      </nav>
    </header>
  )
}
