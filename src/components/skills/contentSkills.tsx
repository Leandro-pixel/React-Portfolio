
import '../../styles/components/contentSkills.sass'
import { useGlobalContext } from '../../context/store';
import React from '../../img/links/react.svg'
import Next from '../../img/links/nextjs.svg'
import Type from '../../img/links/typescript.svg'
import Sass from '../../img/links/sass.svg'



const ContentSkills = () => {

    const {render, setRender} = useGlobalContext();

    return (
        <div id='skillsContent'>

            <aside>
            <div className='btn' onClick={()=>{   
                setRender('type');
                }}>
                    
                    <span className="text">Typescript</span>
                            
            </div>

            <div className='btn'onClick={()=>{   
                setRender('');
                setRender('sass');
                }}>
                    
                    <span className="text">Sass</span>
                            
            </div>

            <div className='btn'onClick={()=>{   
                setRender('');
                setRender('react');
                }}>
                    
                    <span className="text">React</span>
                            
            </div>

            <div className='btn'onClick={()=>{   
                setRender('');
                setRender('next');
                }}>
                    
                    <span className='btn' >Nextjs</span>
                            
            </div>
            
            
            </aside>

            <main>
            {render === 'type' && (
                <div id="typescript" className={`item`}>
                    <img src={Type} alt="" />
                    <span>
                        TypeScript é uma linguagem de programação de código aberto desenvolvida
                        pela Microsoft que estende o JavaScript, adicionando tipos estáticos e outros recursos avançados.
                        Ele é frequentemente usado para desenvolvimento de aplicativos da web e,
                        em particular, com o framework Angular.
                    </span>
                </div>
            )}

            {render === 'sass' && (
                <div id="sass" className={`item`}>
                    <img src={Sass} alt="" />
                    <span>
                    Sass, que significa "Syntactically Awesome Style Sheets," é uma linguagem de 
                    folha de estilo que estende o CSS (Cascading Style Sheets). O objetivo do Sass é simplificar e 
                    tornar mais eficiente o processo de criação e manutenção de folhas de estilo para a web.
                    </span>
                </div>
            )}

            {render === 'react' && (
                <div id='react' className={`item`}>
                    <img src={React} alt="" />
                    <span>
                    React é uma biblioteca JavaScript de código aberto amplamente utilizada para desenvolvimento 
                    de interfaces de usuário interativas e dinâmicas. Ela foi desenvolvida pelo Facebook e é 
                    mantida pela comunidade de código aberto.
                    </span>
                </div>
            )}

            {render === 'next' && (
                <div id="next" className={`item`}>
                    <img src={Next} alt="" />
                    <span>
                    Next.js é um framework de código aberto para React que é utilizado para desenvolvimento 
                    de aplicativos web, oferecendo recursos avançados e soluções para construção de aplicações 
                    web escaláveis e de alto desempenho
                    </span>
                </div>
            )}
               
            </main>

        </div>
    )
}

export default ContentSkills