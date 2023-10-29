
import '../../styles/components/contentProject.sass'

import { useGlobalContext } from '../../context/store';
import CountdownGif from '../../gifs/Countdown.gif'
import webMessengerGif from '../../gifs/webMessengerGIF.gif'
import OpenWeatherGif from '../../gifs/Openweather.gif'
import RocketNFTGif from '../../gifs/RocketNFTs.gif'

import cssIcon from '../../img/cssIcon.webp'
import javaIcon from '../../img/javascript-map-1.png'
import htmlIcon from '../../img/html5-icon.png'
import Next from '../../img/links/nextjs.svg'
import Type from '../../img/links/typescript.svg'
import Sass from '../../img/links/sass.svg'
import {FaGithub} from 'react-icons/fa'
import  i18n  from '../../translate/i18n'

const ContentProject = () => {

    const {render, setRender} = useGlobalContext();

    return (
        <div id='projectContent'>
             <aside>
            <div className='My-btn' onClick={()=>{   
                setRender('project1');
                }}>
                    
                    <span className="text">Web Messenger</span>
                            
            </div>

            <div className='My-btn'onClick={()=>{   
                setRender('project2');
                }}>
                    
                    <span className="text">Countdown</span>
                            
            </div>

            <div className='My-btn'onClick={()=>{   
                setRender('project3');
                }}>
                    
                    <span className="text">Openweather</span>
                            
            </div>

            <div className='My-btn'onClick={()=>{   
                setRender('project4');
                }}>
                    
                    <span className='My-btn' >RocketNFT's</span>
                            
            </div>
            
            
            </aside>

            <main>
                
            {render === 'project1' && (
                <div id="webMessenger" className={`item`}>
                    <img src={webMessengerGif} alt="" />
                    <div id="titlesProject">
                        <h2>Web Messenger</h2>
                        <a href="https://github.com/keelworks">
                        <FaGithub/>
                        </a>
                        </div>

                    <div id="tecs">
                        <img id='nextIcon' src={Next} alt="" />
                        <img src={Type} alt="" />
                        <img src={Sass} alt="" />
                    </div>

                    <p>
                    {i18n.t('ProjectDesc.WebMessenger')}   
                    </p>

                    
                </div>
            )}

            {render === 'project2' && (
                <div id="countDown" className={`item`}>
                    <img src={CountdownGif} alt="" />

                        <div id="titlesProject">
                        <h2 >Countdown + Forms</h2>
                        <a href="https://github.com/Leandro-pixel/Count_Down_RocketSeat">
                        <FaGithub/>
                        </a>
                        </div>

                    <div id="tecs">
                        <img src={cssIcon} alt="" />
                        <img src={htmlIcon} alt="" />
                        <img src={javaIcon} alt="" />
                    </div>

                    <p>{i18n.t('ProjectDesc.CountDown')}</p>
                </div>
            )}

            {render === 'project3' && (
                <div id="openWeather" className={`item`}>
                    <img src={OpenWeatherGif} alt="" />
                    <div id="titlesProject">
                        <h2>Open Weather</h2>
                        <a href="https://github.com/Leandro-pixel/-Openweather">
                        <FaGithub/>
                        </a>
                        </div>

                    <div id="tecs">
                        <img src={cssIcon} alt="" />
                        <img src={htmlIcon} alt="" />
                        <img src={javaIcon} alt="" />
                    </div>

                    <p>{i18n.t('ProjectDesc.OpenWeather')}
                        </p>
                </div>
            )}

            {render === 'project4' && (
                <div id="RocketNFT" className={`item`}>
                    <img src={RocketNFTGif} alt="" />
                    <div id="titlesProject">
                        <h2>Rocket NTF's</h2>
                        <a href="https://github.com/Leandro-pixel/NTF-s">
                        <FaGithub/>
                        </a>
                        </div>

                    <div id="tecs">
                        <img src={cssIcon} alt="" />
                        <img src={htmlIcon} alt="" />
                        <img src={javaIcon} alt="" />
                    </div>

                    <p>{i18n.t('ProjectDesc.Rocket')}
                    </p>
                </div>
            )}
               
            </main>
        </div>
    )
}

export default ContentProject