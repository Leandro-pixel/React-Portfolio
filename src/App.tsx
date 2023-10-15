import "./styles/components/app.sass"
import Profile from "./components/profile"
import Nav from "./components/nav"

import { useGlobalContext } from './context/store';
import ContentProject from "./components/projects/contentProjects";
import ContentSkills from "./components/skills/contentSkills";



function App() {

  const {skills, projects} = useGlobalContext();

  return (
    <div id="appContent">
      <h1>Leandro Soares</h1>
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
