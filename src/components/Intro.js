import React from 'react'
import { Link } from "react-scroll";
import Image from 'react-bootstrap/Image'
const Intro = () => {
    return (
        <div className='intro-div'>
            <div className='intro-content-1'>
                <div>
                    <Image src='/imgs/other/me.jpeg' alt='oops..' className='me-img'/>
                </div>
                <div>
                    <h1 className='homeH1'>Hi!</h1> 
                    <h1 className='homeH1'>I'm Ed Miles</h1>
                </div>
            </div>
            
            <div className='typed-content-div'>
            <h1 className='typed-content'>Software Developer</h1>
            </div>
            <div className='intro-link-div'>
                <Link className='intro-link'
                        activeClass="active"
                        to="about-div"
                        spy={false}
                        smooth={true}
                        offset={-40}
                        duration={1000}
                    >About me...<p><i className="fas fa-chevron-circle-down"></i></p>
                </Link>
            </div>
        </div>
            
    )
}

export default Intro
