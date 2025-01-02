import React from 'react'
import Shanoo from './components/Navbar.jsx'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
function App() {
  return (
    <div>
      <Shanoo/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App;
