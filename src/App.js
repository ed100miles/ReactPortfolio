import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
// import Lorem from './components/Lorem';
// import SkillsMarquee from './components/SkillsMarquee'
import Intro from './components/Intro'
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects'
function App() {

  return (
    <div className="App">
      <NavBar/>
      <Intro />
      <About/>
      {/* <h1 className='subheading' id='techStackTabs'>Technical Skills:</h1> */}
      <Skills/>
      {/* <h1 className='subheading' id='projectTabs'>My Projects:</h1> */}
      <Projects/>
    </div>
  );
}

export default App;
