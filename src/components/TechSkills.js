import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import SkillsMarquee from './SkillsMarquee'

const TechSkills = () => {
    return (
    <div>
        <Tabs defaultActiveKey="Programming" className='skills-tabs'>
            <Tab eventKey="Programming" title="Programming" className='skills-tab'>
                <ul className='skills'>
                    <li><strong><i className="fab fa-python"></i> Python</strong> - This is the programming language I learned first, around five years ago. Over this time I've develped a thorough understanding of core concepts such as working with different data types, logic and flow control, raising and handling exceptions, effectively using functions and classes, as well as utilising modules from the standard library and the wider Python ecosystem. Some examples of libraries I'm familiar with are given under the other tabs above.</li>
                    <li><strong><i className="fab fa-js-square"></i> JavaScript</strong> - A good understanding of Python allowed me to pick up JavaScript with relative ease once the syntax was learned. I now enjoy using JavaScript both in the browser and using node, for web development and to provide a better user experience for my projects. I'm comfortable writing asynchronous programs, using the fetchAPI, and I'm familiar with the newer features implemented in ES5 and ES6. </li>
                    <li><strong><i className="fab fa-slack-hash"></i> Bash</strong> - I primarily use distributions based on the Linux operating system. As a result I'm at ease working on the CLI, writing bash scripts, and performing system administration tasks with Bash.
                    </li>
                    {/* <li><strong><i className="fab fa-centos"></i> Paradigms</strong> - I have experience writing <i>procedural</i>, <i>object-oriented</i> and <i>functional</i> code.</li> */}
                </ul>
                {/* <SkillsMarquee/> */}
            </Tab>
            <Tab eventKey="FrontEnd" title="Front End" className='skills-tab'>
            <ul className='skills'>
                    <li><strong><i className="fab fa-html5"></i> HTML</strong> - I have no problem working with HTML. I know the ropes when implementing different elements and I'm able to manipulate the DOM with JavaScript.</li>
                    <li><strong><i className="fab fa-css3-alt"></i> CSS</strong> - I've got a good understanding when it comes to using CSS to add styling to websites, but I find it far more convenient compiling from SASS!</li>
                    <li><strong><i className="fab fa-sass"></i> SASS</strong> - Finding SASS has been a game changer for me. I've never got much satisfaction from styling websites, but the ease of use and powerful functionality SAAS and other CSS pre-processors bring really helps with what I find can otherwise be a fairly tedious exercise. 
                    </li>
                    <li><strong><i className="fab fa-js-square"></i> JavaScript</strong>  A good understanding of Python allowed me to pick up JavaScript with relative ease once the syntax was learned. I now enjoy using JavaScript both in the browser and using node, for web development and to provide a better user experience for my projects. I'm comfortable writing asynchronous programs, using the fetchAPI, and I'm familiar with the newer features implemented in ES5 and ES6. 
                    </li>
                    <li><strong><i className="fab fa-react"></i> React.js</strong> - I've used React to create several single page applications, and even though I've only recently started using React, and I'm not yet fully utilising all of it's functionality, I find using React componenets a great way of seperating concenrs when coding websites.
                    </li>
                    <li><strong><i className="fas fa-code"></i> Jinja</strong> - With a strong background in Python, I find using Jinja intuitive. The ability to create templates and perform logical operations at the front end is very powerful and useful. I find a use case for Jinja with the majority of my Flask applications.
                    </li>
                </ul>
            </Tab>
            <Tab eventKey="BackEnd" title="Back End" className='skills-tab'>
                <ul className='skills'>
                    <li><strong><i className="fab fa-linux"></i> Linux</strong> - I've been using Linux systems for years now. I've tried out a good handful of OS's such as Arch, Mint, Fedora, Ubuntu - finally resting on Manjaro. I use an Ubuntu build on Linode for my cloud computing needs - which hosts this website. I'm confident working on the command line to perform various system and network administration tasks.
                    </li>
                    <li><strong><i className="fas fa-pepper-hot"></i> Flask</strong> - I chose to learn Flask as my Python web framework as it's more modular than Django and I read this would be better for learning the fundamentals of web development with Python. I have no regrets with this choice and love using Flask, but I'm eager to give the more 'batteries included' Django a go soon.  </li>
                    <li><strong><i className="fab fa-node"></i> Node.js</strong> - While learning JavaScript I also learned the basics of Node.js, such as using NPM and requiring modules, creating a Node.js server, working with the file system, and performing CRUD operations on databases.  </li>
                    <li><strong><i className="fab fa-neos"></i> NginX</strong> - My go-to web server.  </li>
                    <li><strong><i className="fas fa-horse"></i> Gunicorn</strong> - Comfortable using Gunicorn, often used to link between NginX and my Flask apps.</li>
                    <li><strong><i className="fas fa-server"></i> Apache</strong> - I've used this for a number of personal projects which required a server but I now prefer to use NginX for the majority of projects.</li>
                </ul>
            </Tab>
            <Tab eventKey="Data" title="Data" className='skills-tab'>
                <ul className='skills'>
                    <li><strong><i className="fas fa-database"></i> SQL - I can write SQL to sore, manipulate and retrieve data in databases. SQLite is usually sufficient for my purposes but I've also ohad experience using MySQL and Postgres.</strong></li>
                    {/* <li><strong><i className="fas fa-flask"></i> SQLAlchemy - </strong></li> */}
                    <li><strong><i className="fas fa-table"></i> Pandas - I'm familiar with the Pandas library and can use it to read, explore, manipulate and clean data. </strong></li>
                    <li><strong><i className="fas fa-calculator"></i> NumPy - I'm able utilise NumPy effectively when working with large, multi-dimensional arrays. NumPy has been instrumental in several personal projects, especially for machine learning, image manipulation and computer vision tasks.</strong></li>
                    <li><strong><i className="fas fa-calculator"></i> Matplotlib - It's my go to tool for fast and powerful data visulisation.</strong></li>
                    <li><strong><i className="fas fa-calculator"></i> Bokeh - When I need to create data visulisations that are interactive and can be shared and displayed in the browser, Bokeh is my library of choice. </strong></li>
                    <li><strong><i className="fas fa-calculator"></i> Chart.js - and when there's no python back-end but I want to implement good looking interactive visulisations, I turn to Chart.js</strong></li>
                </ul>
            </Tab>
            <Tab eventKey="VersionControl" title="Version Control" className='skills-tab'>
                <ul className='skills'>
                    <li><strong><i className="fab fa-git"></i> Git - I'm confident with basic version control tasks using Git, such as stageing and commiting edits, creating and merging branches, as well as reverting and resetting repositories.  </strong></li>
                    <li><strong><i className="fab fa-github"></i> Github - Familiar with using Github for pulling, pushing, forking and cloning repos.</strong></li>
                    <li><strong><i className="fab fa-docker"></i> Docker - I'm able to use Docker for containerization to develop portable, consistent applications in an isolated and predictable environment.</strong></li>
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
