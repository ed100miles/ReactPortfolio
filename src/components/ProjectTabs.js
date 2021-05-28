import Lorem from './Lorem.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Graph from './Graph'
import Scrabble from './Scrabble'

const ProjectTabs = () => {
    return (
        <div className='project-tabs-div'>
        <Tabs defaultActiveKey="Catspot" className='project-tabs'>
            <Tab eventKey="Catspot" title="CatSpot" className='project-tab'>
                <Lorem />
            </Tab>
            <Tab eventKey="Biden" title="Biden" className='project-tab'>
                <Graph/>
            </Tab>
            <Tab eventKey="Scrabble" title="Scrabble" className='project-tab'>
                <Scrabble />
            </Tab>
        </Tabs>
        </div>
    )
}

export default ProjectTabs
