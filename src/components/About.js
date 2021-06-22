import React from 'react'
import { Link } from "react-scroll";

function About() {
  return (
    <div className='about-div'>
      <div className='about-title-div'>
        <p>About Me</p>
      </div>
      <div className='about-blurb-div'>
        <p>I'm Ed Miles. I've been working in finance for several years now. But most of my spare time I've spent learning to code. </p>
        <p>I've decided to turn my passion into a career. Take a look at my website and if you think I could be a good fit with your team, send me an email and we can chat.</p>
        {/* <p>Take some time to look at some of the skills I've picked up over the last few years - if you think I could be a good fit with your team, send me an email and we can chat.</p> */}
        <p>I really enjoy writing programs that help solve a problem, but often they're just for a bit of fun or to learn something new. I get a real kick out of machine learning and natural language programming.</p>
        <p>You can see some examples of things I've built in the <i>'projects'</i> section below. You'll also find links to my github where you can check out the source code.</p>
        <p>Thanks for visiting!</p>
      </div>
      <div className='about-link-div'>
        <Link className='about-link'
          activeClass="active"
          to="tech-skills-div"
          spy={false}
          smooth={true}
          offset={-40}
          duration={1000}
        >Technical Skills...<p><i className="fas fa-chevron-circle-down"></i></p>
        </Link>
      </div>
    </div>
  )
}

export default About
