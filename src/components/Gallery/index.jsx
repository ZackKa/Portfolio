import { Link } from 'react-router-dom'
import logementsList from "../../datas/projetList";
import { useState } from 'react'
// import Modal from '../Modal'


function Gallery () {
	const [open, setOpen] = useState(false);

	function Toggle () {
        setOpen(!open);
    };
	// const buttonClicked = (e) => {
    //     e.stopPropagation()
	// };
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
			{/* <div className={open ? "modal__body" : "modal__body__hidden"} onClick={Toggle}>
				<div className='modal__body__content' onClick={ (e) => buttonClicked(e) }>
					<button onClick={Toggle}><i class="fa-solid fa-xmark"></i></button>
					<Modal />
				</div>
			</div> */}
			
			{/* {open ? "modal__body" : "modal__body__hidden"} */}
			</div>
		</section>
        
    )
}

export default Gallery