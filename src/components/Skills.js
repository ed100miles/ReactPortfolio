import React from 'react'
import TechSkills from './TechSkills';
import { Link } from "react-scroll";

function Skills() {
    return (
        <div className='tech-skills-div'>
            <p className='skills-header'>
                Technical Skills
            </p>
            <div className='tech-skills-container'><TechSkills/></div>
            
            <div className='projects-link-div'>
                <Link className='projects-link'
                        activeClass="active"
                        to="projects-div"
                        spy={false}
                        smooth={true}
                        offset={-40}
                        duration={1000}
                        >Projects...<p><i className="fas fa-chevron-circle-down"></i></p>
                </Link>
            </div>
            
        </div>
    )
}

export default Skills
