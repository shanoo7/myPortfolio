import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer.jsx";


function App() {

useEffect(()=>{
  AOS.init({
    duration:1000
  })
},[]);
  

  return (
    <div className="bg-[#000000] text-white">
      
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer/>
      <Toaster />
    </div>
  );
}

export default App;

