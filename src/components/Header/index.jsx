// import { NavLink } from 'react-router-dom'
import HomeLogo from '../../assets/Memoji.png'
import { useState } from 'react'

function Header() {
    const [open, setOpen] = useState(true);

    // window.onscroll = () => {
    //     if (window.scrollY > 580) {
    //         setOpen(!open)
    //     }
    // };
    
    return(
        <header >
            <div className={open ? "nav" : "nav__background"}>
                <img src={HomeLogo} alt="Logo" />
                <nav>
                    {/* <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} >Accueil</NavLink> */}
                    {/* <NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>A propos</NavLink> */}
                    <a href="#A_propos" >A propos</a>
                    <a href="#Formation">Mes formations et compétences</a>
                    <a href="#Projet">Mes projets</a>
                    <a href="#Contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}
export default Header