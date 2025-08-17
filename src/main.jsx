import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Experience from './components/Experience/Experience.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github, {githubInfoLoader} from './components/Github/Github.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx'
import { createRoutesFromElements,RouterProvider, createBrowserRouter, Route } from 'react-router-dom'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[{
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "about",
//       element:<About />
//     },
//     {
//       path: "contact",
//       element:<Contact />
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='experience' element={<Experience />} />
      <Route path='about' element={<About />} />
      <Route path='skills' element={<Skills />} />
      <Route path='contact' element={<Contact />} />
      <Route path='projects' element={<Projects />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
