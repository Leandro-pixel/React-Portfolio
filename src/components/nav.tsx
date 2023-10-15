
import { useGlobalContext } from '../context/store';
import {FaChartBar,FaCogs} from 'react-icons/fa';

import '../styles/components/nav.sass'


const Nav = () => {

    const {skills, setSkills} = useGlobalContext();
    const {projects, setProjects} = useGlobalContext();

    return (

        <nav id='nav'>
            <div id='skills' className={`item ${skills && 'clicked'}`} onClick={()=>{   
                history.replaceState(null, "", '/skills');
                setSkills(true);
                setProjects(false);
                }}>
                    <FaChartBar className="icon-skills"/>
                    <span className="text">Skills</span>
                            
            </div>

            <div id='projects' className={`item ${projects && 'clicked'}`} onClick={()=>{
                history.replaceState(null, "", '/projects');
                setProjects(true);
                setSkills(false);
                }}>
                    <FaCogs className="icon-projects"/>
                    <span className="text">Projects</span>     
            </div>
        </nav>

    
        

    )
}

export default Nav