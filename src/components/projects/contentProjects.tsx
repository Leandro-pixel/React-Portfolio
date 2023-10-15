
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

const ContentProject = () => {

    const {render, setRender} = useGlobalContext();

    return (
        <div id='projectContent'>
             <aside>
            <div className='btn' onClick={()=>{   
                setRender('project1');
                }}>
                    
                    <span className="text">Web Messenger</span>
                            
            </div>

            <div className='btn'onClick={()=>{   
                setRender('project2');
                }}>
                    
                    <span className="text">Countdown</span>
                            
            </div>

            <div className='btn'onClick={()=>{   
                setRender('project3');
                }}>
                    
                    <span className="text">Openweather</span>
                            
            </div>

            <div className='btn'onClick={()=>{   
                setRender('project4');
                }}>
                    
                    <span className='btn' >RocketNFT's</span>
                            
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
                        Web messenger (ainda em andamento) – Atualmente trabalho como front-end no projeto Web messenger 
                        na instituição KeelWorks dos Estados Unidos, trabalho com uma equipe onde fazemos reuniões semanais 
                        para planejamentos de tarefas, esse web aplicativo trata-se de uma plataforma para o  gerênciamento de 
                        doações via SMS na qual os funcionários da KeelWorks possam falar diretamente com os doadores, 
                        usamos a API do Twilio para enviar e receber SMS e assim também processar o valor das doações, 
                        e a API Clerk para autentificação de usuários do aplicativo.
                        
                    </p>

                    
                </div>
            )}

            {render === 'project2' && (
                <div id="countDown" className={`item`}>
                    <img src={CountdownGif} alt="" />

                        <div id="titlesProject">
                        <h2 >Countdown + Formulário</h2>
                        <a href="https://github.com/Leandro-pixel/Count_Down_RocketSeat">
                        <FaGithub/>
                        </a>
                        </div>

                    <div id="tecs">
                        <img src={cssIcon} alt="" />
                        <img src={htmlIcon} alt="" />
                        <img src={javaIcon} alt="" />
                    </div>

                    <p>É um site simulando a estréia de um lançamento de um produto fictício, 
                        faz parte de uma prova didática criada pela Rocketseat. Incrementei ao desáfio um 
                        formulário com validação para que o cliente receba notificações em seu e-mail sobre o lançamento.</p>
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

                    <p>Aplicativo utilizando API da Openweather com objetivo de informação climática de 
                        cidades/estados ou países. Para a comunicação entre o aplicativo e a 
                        API foi utilizado o método Fetch e Json.
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

                    <p>Site estilo landing page sobre NTF's, também prova didática fornecida pela Rocketseat, 
                        básicamente foi usado somente HTML e CSS, porém para o efeito de scroll gerador de conteúdo 
                        foi utilizado Javascript.
                    </p>
                </div>
            )}
               
            </main>
        </div>
    )
}

export default ContentProject