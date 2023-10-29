import "./styles/components/app.sass"
import Profile from "./components/profile"
import Nav from "./components/nav"

import { Dropdown } from 'react-bootstrap';
import { useGlobalContext } from './context/store';
import ContentProject from "./components/projects/contentProjects";
import ContentSkills from "./components/skills/contentSkills";
import {FaGlobe} from 'react-icons/fa';
//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icons.min.css'


const I18N_STORAGE_KEY = 'i18nextLng'

function App() {

  const {skills, projects} = useGlobalContext();
  //const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

  const handleSelectChange = (eventKey: string|null) => {
    const selectedLanguage = eventKey || '';
    localStorage.setItem(
      I18N_STORAGE_KEY,
      selectedLanguage
    )
    history.replaceState(null, "", '/React-Portfolio/skills');
    window.location = window.location
    
  }

  

  return (
    <div id="appContent">

      <h1>Leandro Soares
      <Dropdown id="dropDown"  onSelect={handleSelectChange}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FaGlobe/>
      </Dropdown.Toggle>

      <Dropdown.Menu  className="dropMenu">
        <Dropdown.Item eventKey="PT-br" className="flag-icon flag-icon-br"></Dropdown.Item>
        <Dropdown.Item eventKey="EN-us" className="flag-icon flag-icon-us"></Dropdown.Item>
        <Dropdown.Item eventKey="JP-ja" className="flag-icon flag-icon-jp"></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </h1>
      
      <Profile/>
     <div id="content">
     <Nav/>
     {projects && <ContentProject/>}
     {skills && <ContentSkills/>}
     </div>
    </div>
    
    
  )
}

export default App
