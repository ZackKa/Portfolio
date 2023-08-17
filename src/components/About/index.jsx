function About () {

    return(
        <section className="about-section">
            <div className="about" id="A_propos">
                <h2 className="about__title">À propos de moi !</h2>
            </div>
            <div className="about__text">
                <div className="about__text__paragraphe">
                <p>Étant issue d'une licence scientifique (mathématique, informatique et économie), j'ai pu mettre un pied dans le codage et les langages informatiques. J'ai toujours eu un intérêt certain avec le monde informatique.<br/>
                <br /> Après avoir exercé professionnellement en tant que technicien de support, j'ai eu l'opportunité de me former sur le développement, apprendre différentes technologies et me voilà développeur web Javascript. Comme tout bon développeur je souhaite approfondir mes connaissances.</p>
                </div>
                <div className="about__text__decoration"></div>
            </div>
            <div className="about__link">
                <a className="linkedin" href="https://www.linkedin.com/in/zakari-k/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin"></i></a>
                <a className="github" href="https://github.com/ZackKa" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-square-github"></i></a>
            </div>
        </section>
    )
}
export default About