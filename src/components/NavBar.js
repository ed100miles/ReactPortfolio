import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-scroll";

const NavBar = () => {
    return (

<Navbar expand="sm" fixed='top'>
  {/* <Navbar.Brand href="#home">EdMiles.tech</Navbar.Brand> */}
  <Link className='nav-brand'
            activeClass="active"
            to="homeH1"
            spy={false}
            smooth={true}
            offset={-500}
            duration={1000}
        >EdMiles.tech
    </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <span className='nav-links' id='home-link'>
            <Link
                activeClass="active" 
                to="homeH1"
                spy={false}
                smooth={true}
                offset={-500}
                duration={1000}
            >Home
            </Link> 
        
        </span>
        <span className='nav-links' id='about-link'>
        <Link
            activeClass="active" 
            to="about-div"
            spy={false}
            smooth={true}
            offset={-40}
            duration={1000}
        >About
        </Link>
        </span>
        <span className='nav-links' id='skills-link'>
        <Link
            activeClass="active" 
            to="tech-skills-div"
            spy={false}
            smooth={true}
            offset={-40}
            duration={1000}
        >Skills
        </Link>
        </span>
        <span className='nav-links' id='projects-link'>
        <Link
            activeClass="active"
            to="projects-div"
            spy={false}
            smooth={true}
            offset={-40}
            duration={1000}
        >Projects
        </Link>
        </span>
        <span className='nav-links' id='email-me-link'>
            <a href='mailto edmilestech@gmail.com'>Email Me</a>
        </span>
    </Nav>
  </Navbar.Collapse>
</Navbar>


    // <nav className="nav" id="navbar">
    //     <div className="nav-content">
    //         <span className='nav-link'>
    //             <Link
    //                 activeClass="active"
    //                 to="homeH1"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={0}
    //                 duration={1000}
    //             >Home
    //             </Link>
    //         </span>
    //         <span className='nav-link'>
    //             <Link
    //                 activeClass="active"
    //                 to="projectTabs"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-50}
    //                 duration={1000}
    //             >Projects
    //             </Link>
    //         </span>
    //         {/* <span onClick={scrollToTop}>Back to Top</span> */}
    //     </div>
    //   </nav>
    )
}
   
export default NavBar
