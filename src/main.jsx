import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skill from './skill/Skill.jsx'
import Project from './project/Project.jsx'
import Contact from './components/Contact.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,

    children: [
      {
        path:'/', element: <Home />
      },
      {
        path:'/about', element: <About />
      },
      {
        path:'/contact', element: <Contact />
      },
      {
        path:'/skill', element: <Skill />
      },
      {
        path:'/project', element: <Project />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App /> 
    </RouterProvider>
   
  </StrictMode>,
)
