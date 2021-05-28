// import Lorem from './Lorem.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import SkillsMarquee from './SkillsMarquee'

const TechSkills = () => {
    return (
    <div>
        <Tabs defaultActiveKey="Programming" className='skills-tabs'>
            <Tab eventKey="Programming" title="Programming" className='skills-tab'>
                <ul className='skills'>
                    <li><strong><i className="fab fa-python"></i> Python</strong> - This is the language I learned first and I'm most confident programming in.</li>
                    <li><strong><i className="fab fa-js-square"></i> JavaScript</strong> - I've recently learned the JavaScript syntax and I'm now comfortable writing code in this language.</li>
                    <li><strong><i className="fab fa-slack-hash"></i> Bash</strong> - I've been using Linux based systems for years now. I'm comfortable working on the command line and writing bash scripts when required. </li>
                    <li><strong><i className="fab fa-centos"></i> Paradigms</strong> - I have experience writing <i>procedural</i>, <i>object-oriented</i> and <i>functional</i> code.</li>
                </ul>
                {/* <SkillsMarquee/> */}
            </Tab>
            <Tab eventKey="FrontEnd" title="Front End" className='skills-tab'>
            <ul className='skills'>
                    <li><strong><i className="fab fa-html5"></i> HTML</strong> - I have no problem working with HTML, I find it pretty straight forward, not a lot more to say on it.  </li>
                    <li><strong><i className="fab fa-css3-alt"></i> CSS</strong> - I've got a solid understanding of CSS, but I find it far more convenient compliling from SASS!</li>
                    <li><strong><i className="fab fa-sass"></i> SASS</strong> - Finding SASS has been a game changer for me, I never want to go back...</li>
                    <li><strong><i className="fab fa-js-square"></i> JavaScript</strong> - After playing with JS for a year or so, I'm pretty confident using it; I find it makes a much more sleek front end for my programs than any Python library.</li>
                    <li><strong><i className="fab fa-react"></i> React.js</strong> - I've found dealing with react components a great way of seperating concerns when coding websites.</li>
                    <li><strong><i className="fas fa-code"></i> Jinja</strong> - If I'm using Flask, I'm almost certainly using Jinja, it's a poweful and pretty simple to use tool. </li>
                </ul>
            </Tab>
            <Tab eventKey="BackEnd" title="Back End" className='skills-tab'>
                <ul className='skills'>
                    <li><strong><i className="fab fa-linux"></i> Linux</strong> - I've been using Linux systems for years now. I've tried out a good handful of OS's such as Arch, Mint, Fedora, Ubuntu - finally resting on Manjaro. I use an Ubuntu build on Linode for my cloud computing needs - it even hosts this website. </li>
                    <li><strong><i className="fas fa-pepper-hot"></i> Flask</strong> - I chose to learn Flask as my Python web framework as it's more modular than Django and I read this would be better for learning the fundamentals of web development with Python. But I'm eager to give the 'batteries included' Django a go in the future.  </li>
                    <li><strong><i className="fab fa-node"></i> Node.js</strong> - I'm comfortable using this runtime environment (it powers this site) </li>
                    <li><strong><i className="fab fa-neos"></i> NginX</strong> - My preferred server software, I find it easier to set up and maintain than Apache.  </li>
                    <li><strong><i className="fas fa-horse"></i> Gunicorn</strong> - I use this to link between NginX and Flask apps.</li>
                    <li><strong><i className="fas fa-server"></i> Apache</strong> - I've used this for a number of personal projects which required a server but find it can be a bit of a faff.</li>
                </ul>
            </Tab>
            <Tab eventKey="Data" title="Data use" className='skills-tab'>
                <ul className='skills'>
                    <li><strong><i className="fas fa-database"></i> SQL</strong></li>
                    <li><strong><i className="fas fa-flask"></i> SQLAlchemy</strong></li>
                    <li><strong><i className="fas fa-table"></i> Pandas</strong></li>
                    <li><strong><i className="fas fa-calculator"></i> Numpy</strong></li>
                    <li><strong><i className="fas fa-calculator"></i> Bokeh</strong></li>
                    <li><strong><i className="fas fa-calculator"></i> Matplotlib</strong></li>
                    <li><strong><i className="fas fa-calculator"></i> Chart.js</strong></li>
                </ul>
            </Tab>
            <Tab eventKey="VersionControl" title="Version Control" className='skills-tab'>
                <ul className='skills'>
                    <li><strong><i className="fab fa-git"></i> Git</strong></li>
                    <li><strong><i className="fab fa-github"></i> Github</strong></li>
                    <li><strong><i className="fab fa-docker"></i> Docker</strong></li>
                </ul>
            </Tab>
            <Tab eventKey="AlsoFamiliarWith" title="Also Familiar With..." className='skills-tab'>
                <ul className='skills'>
                    <li><strong><i className="fab fa-connectdevelop"></i> Tensorflow</strong></li>
                    <li><strong><i className="fas fa-fire"></i> Pytorch</strong></li>
                    <li><strong><i className="fas fa-images"></i> OpenCV</strong></li>
                    <li><strong><i className="fas fa-laptop-code"></i> VS Code</strong></li>
                    <li><strong><i className="fas fa-spider"></i> Spyder</strong></li>
                    <li><strong><i className="fas fa-bug"></i> Debugging</strong></li>
                </ul>
            </Tab>
        </Tabs>
    </div>
    )
}

export default TechSkills
