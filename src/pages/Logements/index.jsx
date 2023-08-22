import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Error from '../Error'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Star from '../../components/Star'
import Carousel from '../../components/Carousel'
import Tags from '../../components/Tags'
import logementsList from "../../datas/logementsList";

function Logements() {
    const { id } = useParams()
    const logement = logementsList.find((logement) => logement.id === id);
    if (!logement) {
        return <Error />;
    }
    return (
        <>
            <Header lien5 = {"Acceuil"} lien6 = {"Contact"} />
            <main>
                {/* <Carousel collapseImg={logement.pictures}/> */}
                <div className='corp'>
                    <div className='corp__contenue'>
                        <div className='corp__contenue__gauche'>
                            <h1>{logement.title}</h1>
                            {/* <p>{logement.location}</p> */}
                            {/* <Tags tags={logement.tags}/> */}
                        </div>
                        {/* <div className='corp__contenue__droit'>
                            <div className='corp__contenue__droit__image'>
                                <p>{logement.host.name}</p>
                                <img src={logement.host.picture} alt="Portrait du propriétaire" />
                            </div>
                            <Star valeur={logement.rating}/>
                        </div> */}
                    </div>
                    <div className='corp__collapse'>
                        <Collapse label="Mission" type={logement.techno}>
                            <p>{logement.description}</p>
                        </Collapse>
                        {/* <Collapse label="Technologies utilisées" type={logement.techno}>
                        </Collapse> */}
                    
                    </div>
                </div>
                <div className='pics'>
                    {logement.pictures.map((picture, index) => (
                    <div className="pics__img" key={index} id={logement.id + index}>
                        <img src={picture} alt="photographie du logement" />
                        </div>
                        ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Logements