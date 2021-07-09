import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro'
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Intro />
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;


