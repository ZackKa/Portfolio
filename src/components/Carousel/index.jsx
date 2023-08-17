import { useState } from "react";

function Carousel (props) {
    const [open, setOpen] = useState(0);
    
    function Precedent () {
        setOpen(open === 0 ? props.collapseImg.length - 1 : open - 1);
    };
    function Suivant () {
        setOpen(open === props.collapseImg.length - 1 ? 0 : open + 1);
    };

    return(
        <div className='carousel'>
            {props.collapseImg.map((picture, index) => (
                <div className="carousel__img" key={index}>
                    {index === open && (
                        <img src={picture} alt="photographie du logement" />
                    )}
                </div>
                
            ))}
            {props.collapseImg.length > 1 ? (
                <div className="carousel__btn">
                    <button onClick={Precedent}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button onClick={Suivant}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                    <span>{open + 1}/{props.collapseImg.length}</span>
                </div>
                
            ) : null}
        </div>
    )
}
export default Carousel