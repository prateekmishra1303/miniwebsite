import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Github from './components/Github/Github';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';


function App() {
  
  const [bgColor, setBgColor] = useState('#fef9f2');

  const toggleColor = () => {
    setBgColor(prev => prev === "#fef9f2" ? '#e0f7fa' : '#fef9f2');
  }

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="min-h-screen">
      <Header toggleColor={toggleColor} />
    <Home />
    <Skills />
    <About />
    <Contact />
    <Github />
    <Experience />
    <Footer />
  </div>
    </>
  )
}

export default App
