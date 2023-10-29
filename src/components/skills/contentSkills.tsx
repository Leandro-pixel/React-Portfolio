
import '../../styles/components/contentSkills.sass'
import { useGlobalContext } from '../../context/store';
import React from '../../img/links/react.svg'
import Next from '../../img/links/nextjs.svg'
import Type from '../../img/links/typescript.svg'
import Sass from '../../img/links/sass.svg'
import  i18n  from '../../translate/i18n'



const ContentSkills = () => {

    const {render, setRender} = useGlobalContext();

    return (
        <div id='skillsContent'>

            <aside>
            <div className='My-btn' onClick={()=>{   
                setRender('type');
                }}>
                    
                    <span className="text">Typescript</span>
                            
            </div>

            <div className='My-btn'onClick={()=>{   
                setRender('');
                setRender('sass');
                }}>
                    
                    <span className="text">Sass</span>
                            
            </div>

            <div className='My-btn'onClick={()=>{   
                setRender('');
                setRender('react');
                }}>
                    
                    <span className="text">React</span>
                            
            </div>

            <div className='My-btn'onClick={()=>{   
                setRender('');
                setRender('next');
                }}>
                    
                    <span className='text' >Nextjs</span>
                            
            </div>
            
            
            </aside>

            <main>
            {render === 'type' && (
                <div id="typescript" className={`item`}>
                    <img src={Type} alt="" />
                    <span>
                    {i18n.t('TecDesc.Type')}
                    </span>
                </div>
            )}

            {render === 'sass' && (
                <div id="sass" className={`item`}>
                    <img src={Sass} alt="" />
                    <span>
                    {i18n.t('TecDesc.Sass')}
                    </span>
                </div>
            )}

            {render === 'react' && (
                <div id='react' className={`item`}>
                    <img src={React} alt="" />
                    <span>
                    {i18n.t('TecDesc.React')}
                    </span>
                </div>
            )}

            {render === 'next' && (
                <div id="next" className={`item`}>
                    <img src={Next} alt="" />
                    <span>
                    {i18n.t('TecDesc.Next')}
                    </span>
                </div>
            )}
               
            </main>

        </div>
    )
}

export default ContentSkills