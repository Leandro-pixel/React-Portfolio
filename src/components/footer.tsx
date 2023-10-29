
import '../styles/components/footer.sass'
import { FaEnvelope } from 'react-icons/fa'
import  i18n  from '../translate/i18n'

const Footer = () => {
    return (
        <footer id='footer'>
            <h1>{i18n.t('Footer.Title')}</h1>

            <div id="forms">

            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="f581298d-cce7-4d47-9e76-4c99cb782ee3"/>
                <input type="hidden" name="redirectTo" value="http://127.0.0.1:5500/index.html#nav"/>
                <label className="email" htmlFor="email">{i18n.t('Footer.Email')}</label>
                    <div className="input_email">
                        <FaEnvelope/>
                        <input type="email" name="email"
                         id="" placeholder={i18n.t('Footer.EmailHolder')}
                         required
                         minLength={8}
                         pattern=".*\@\.com.*" 
                         title="E-mail inválido"/>   
                    </div>
        
                    <label htmlFor="message">{i18n.t('Footer.Comments')}</label>
                    
                    <textarea name="message" id="comentario" cols={50} rows={10} placeholder={i18n.t('Footer.CommentHolder')}></textarea>
                    <button className='My-btn' id="enviar" type="submit">{i18n.t('Footer.button')}</button>
            </form>

            <p>
            {i18n.t('Footer.Message')}
            <span>&#128516;</span>
            </p>

            

            </div>
            
            </footer>
    )
}

export default Footer