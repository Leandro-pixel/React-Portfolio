
import { useGlobalContext } from '../context/store';
import {FaChartBar,FaCogs} from 'react-icons/fa';

import '../styles/components/nav.sass'
import  i18n  from '../translate/i18n'



const Nav = () => {

    const {skills, setSkills} = useGlobalContext();
    const {projects, setProjects} = useGlobalContext();

    return (

        <nav id='nav'>
            <div id='skills' className={`item ${skills && 'clicked'}`} onClick={()=>{
                history.replaceState(null, "", '');   
                history.replaceState(null, "", '/React-Portfolio/skills');
                setSkills(true);
                setProjects(false);
                }}>
                    <FaChartBar className="icon-skills"/>
                    <span className="text">{i18n.t('NavButtons.skill')}</span>
                            
            </div>

            <div id='projects' className={`item ${projects && 'clicked'}`} onClick={()=>{
                history.replaceState(null, "", '');
                history.replaceState(null, "", '/React-Portfolio/projects');
                setProjects(true);
                setSkills(false);
                }}>
                    <FaCogs className="icon-projects"/>
                    <span className="text">{i18n.t('NavButtons.projects')}</span>     
            </div>
        </nav>

    
        

    )
}

export default Nav