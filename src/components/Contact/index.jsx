import ContactLogo from '../../assets/memoji_footer.png'

function Contact() {
    return(
        <section id="contact">
            <img src={ContactLogo} alt="Logo" />
            <div className='contact__corp'>
                <h2> Me Contacter</h2>
                <p>Pour me contacter, vous pouvez cliquer sur la petite enveloppe <a href="mailto:zakari_k@outlook.com"><i className="fa-solid fa-envelope"></i></a></p>
                <p>Sinon je vous laisse copier mon adresse mail : zakari_k@outlook.com</p>
                <p>Vous pouvez aussi me contacter sur mon Linkedin <a className="linkedin" href="https://www.linkedin.com/in/zakari-k/" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-linkedin"></i></a> et consulter ma page Git <a className="github" href="https://github.com/ZackKa" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-square-github"></i></a></p>
            </div>
        </section>
    )
}
export default Contact