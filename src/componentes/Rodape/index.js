import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/nsunb_matheuskim/"><img src='/imagens/ig.png' alt='Ícone Instagram'></img></a>
                    </li>
                    <li>
                        <a href="https://wa.me/5511944659427"><img className='wp' src='/imagens/wp.png' alt='Ícone WhatsApp'></img></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/nsunb_mthK"><img src='/imagens/tw.png' alt='Ícone Twitter'></img></a>
                    </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='Logo Rodapé'></img>
            </section>
            <section>
                <p>
                    Desenvolvido por 
                    <a href='https://www.linkedin.com/in/matheus-kim-19b154251/'><span className='aluno'> Matheus Kim</span></a> <br></br>
                    em conjunto com os instrutores<br></br> 
                    <a href='https://www.linkedin.com/in/paulosilveira/'><span className='instrutor'>Paulo Silveira </span></a>
                    e 
                    <a href='https://www.linkedin.com/in/vinny-neves/'><span className='instrutor'> Vinicius Neves</span></a><br></br> 
                    pela plataforma 
                    <a href='https://www.alura.com.br/'><span className='plataforma'> Alura</span></a>
                </p>
            </section>
        </footer>
    )
}

export default Rodape