import React from 'react'
import { Link } from "react-scroll";

function Footer() {
    return (
        <div className='footer-div'>
            <span className='foot-email-div'>
                <a href='mailto:edmilestech@gmail.com'>edmilestech@gmail.com</a>
            </span>

            <span className='back-to-top-div'>
                <Link
                    activeClass="active" 
                    to="homeH1"
                    spy={false}
                    smooth={true}
                    offset={-500}
                    duration={1000}
                    ><i className="fas fa-chevron-circle-up"></i> Back to top <i className="fas fa-chevron-circle-up"></i>
                </Link>
            </span>

            <span className='foot-media-links'>
                <a href='mailto:edmilestech@gmail.com'>
                    <i class="far fa-envelope"></i>
                </a>
                <a href='https://www.linkedin.com/in/edward-miles-407349143'
                    target='_blank'
                    rel="noreferrer">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href='https://github.com/ed100miles'
                    target='_blank'
                    rel="noreferrer">
                    <i class="fab fa-github"></i>
                </a>
            </span>


        </div>
    )
}

export default Footer
