
import '../styles/components/footer.sass'
import { FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer id='footer'>
            <h1>Entre em contato</h1>

            <div id="forms">

            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="f581298d-cce7-4d47-9e76-4c99cb782ee3"/>
                <input type="hidden" name="redirectTo" value="http://127.0.0.1:5500/index.html#nav"/>
                <label className="email" htmlFor="email">E-mail</label>
                    <div className="input_email">
                        <FaEnvelope/>
                        <input type="email" name="email"
                         id="" placeholder="Digite seu e-mail"
                         required
                         minLength={8}
                         pattern=".*\@\.com.*" 
                         title="E-mail inválido"/>   
                    </div>
        
                    <label htmlFor="message">Comentário</label>
                    
                    <textarea name="message" id="comentario" cols={50} rows={10} placeholder="Deixe seu Comentário"></textarea>
                    <button className='btn' id="enviar" type="submit">Enviar mensagem</button>
            </form>

            <p>
            Agradeço desde já pela oportunidade de poder lhe mostrar minhas capacidades, aguardo o seu retorno!
            <span>&#128516;</span>
            </p>

            

            </div>
            
            </footer>
    )
}

export default Footer