import ContactLogo from '../../assets/memoji_footer.png'

function Contact() {
    return(
        <div id="Contact">
            <img src={ContactLogo} alt="Logo" />
            <div className='contact__corp'>
                <h2> Me Contacter</h2>
                {/* <i class="fa-solid fa-envelope"></i> */}
                <p>Pour me contacter, vous pouvez cliquez sur la petite enveloppe <a href="mailto:lotfi_ghemati@outlook.fr"><i class="fa-solid fa-envelope"></i></a></p>
                <p>Sinon je vous laisse copier mon adresse mail : blabla@live.fr</p>
                <p>Vous pouvez aussi me contacter sur mon linkedin <a className="linkedin" href="https://www.linkedin.com/in/zakari-k/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin"></i></a> et consulter ma page git <a className="github" href="https://github.com/ZackKa" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-square-github"></i></a></p>
            </div>
        </div>
    )
}
export default Contact