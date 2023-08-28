import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Error from '../Error'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import logementsList from "../../datas/projetList";
import { useEffect } from 'react'
import Contact from '../../components/Contact'

function Logements() {
    const { id } = useParams()
    const logement = logementsList.find((logement) => logement.id === id);
    if (!logement) {
        return <Error />;
    }
    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
    }
    return (
        <>
        <ScrollToTopOnMount />
            <Header lien5 = {"Acceuil"} lien6 = {"Contact"} />
            <main>
                <div className='corp'>
                    <div className='corp__contenue'>
                        <div className='corp__contenue__gauche'>
                            <h1 id='projet_h1'>{logement.title}</h1>
                        </div>
                    </div>
                    <div className='corp__collapse'>
                        <Collapse label="Mission" type={logement.techno}>
                            <p><span>Description : </span>{logement.description}</p>
                            <p><span>Problématique : </span>{logement.problematique}</p>
                            <p><span>Compétences : </span>{logement.competences}</p>
                            <p><a href={logement.lien} target="_blank" rel="noreferrer noopener"><span>Lien :</span>{logement.lien}</a></p>
                        </Collapse>
                    </div>
                </div>
                <div className='pics'>
                    {logement.pictures.map((picture, index) => (
                    <div className="pics__img" key={index} id={logement.id + index}>
                        <img src={picture} alt="photographie du projet" />
                    </div>
                    ))}
                </div>
            </main>
            <Contact />
            <Footer />
        </>
    )
}

export default Logements