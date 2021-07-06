import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Graph from './Graph';
import Scrabble from './Scrabble';
import VaccSite from './VaccSite';
// import Catspot from './Catspot';
import ImgMod from './ImgMod';

const ProjectTabs = () => {
  return (
    <div className='project-tabs-div'>
      <Tabs defaultActiveKey="Biden" className='project-tabs'>
        <Tab eventKey="Biden" title="Sentiment Analysis" className='project-tab'>
          <Graph />
        </Tab>
        <Tab eventKey="ImgMod" title="Image Modification" className='project-tab'>
          <ImgMod />
        </Tab>
        <Tab eventKey="Scrabble" title="Scrabble Cheat" className='project-tab'>
          <Scrabble />
        </Tab>
        <Tab eventKey="VaccSite" title="Vaccination Finder" className='project-tab'>
          <VaccSite />
        </Tab>
        {/* <Tab eventKey="Catspot" title="CatSpot" className='project-tab'>
          <Catspot />
        </Tab> */}
      </Tabs>
    </div>
  )
}

export default ProjectTabs

