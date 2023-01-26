import './App.css';
import React from 'react';
import VerticalNavBar from './NavBar';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <div id="info" className="bg-gray-300 scroll-smooth h-[100%] w-[100%]">
      <VerticalNavBar/>
    <div className="flex flex-col items-center px-4 lg:pl-40">
      <Header/>
      <Education/>
      <Experience/>
      <Skills/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;

