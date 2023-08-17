function Banniere (props) {
    return(
        <div className="banniere">
			{/* <div className="banniere__filtreOpacite"></div> */}
        	<div className="banniere__image">
				<img src={props.cover} alt="Couverture de page" />
        	</div>
			<div className="banniere__texte">
				<h1>Bonjour et bienvenue ! <br/>
					Je suis Zakari K. développeur full-stack Javascript.
				</h1>
			</div>
			<div className='banniere__planet1'>
				<i class="fa-solid fa-earth-africa"></i>
			</div>
			<div className="banniere__planet2">
				<i class="fa-solid fa-meteor"></i>
			</div>
			<div className='banniere__etoile1'></div>
			<div className='banniere__etoile2'></div>
			<div className='banniere__etoile3'></div>
			<div className='banniere__etoile4'></div>
			<div className='banniere__etoile5'></div>
			<div className='banniere__etoile6'></div>
			<div className='banniere__etoile7'></div>
        </div>
    )
}
export default Banniere