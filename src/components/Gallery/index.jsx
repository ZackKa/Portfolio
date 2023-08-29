import { Link } from 'react-router-dom'
import logementsList from "../../datas/projetList";
import { useState } from 'react'


function Gallery () {
	const [open, setOpen] = useState(false);

	function Toggle () {
        setOpen(!open);
    };
    return(
		<section className='general__gallery' id="projet">
			<h2> Mes projets</h2>
			<div className="gallery">
        	{logementsList.map((logement) => (
			<div className='gallery__annonce' key={logement.id} onClick={Toggle}>
                <Link to={`/Logements/${logement.id}`} preventScrollReset={true}>
                    <div className="gallery__annonce__paragraphe"><h2>{logement.title}</h2></div>
                    <img src={logement.cover} alt="Projet" />
                </Link>
            </div>
        	))}
			</div>
		</section>
        
    )
}

export default Gallery