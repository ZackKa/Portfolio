// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom';
import HomeLogo from '../../assets/Memoji.png'
import { useState, useEffect } from 'react'

function Header(props) {
    const [open, setOpen] = useState(true);

    // window.onscroll = () => {
    //     if (window.scrollY > 580) {
    //         setOpen(!open)
    //     }
    // };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 535) {
                setOpen(false)
            } else {
                setOpen(true);
            }
        });
    }, []);
    
    return(
        <header >
            <div className={open ? "nav" : "nav__background"}>
                <img src={HomeLogo} alt="Logo" />
                <nav>
                    {/* <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} >Accueil</NavLink> */}
                    {/* <NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>A propos</NavLink> */}
                    <a href="#A_propos" >{props.lien1}</a>
                    <a href="#Formation">{props.lien2}</a>
                    <a href="#Projet">{props.lien3}</a>
                    <a href="#Contact">{props.lien4}</a>
                    <Link to="/">{props.lien5}</Link>
                    <a href='#Contact'>{props.lien6}</a>

                </nav>
            </div>
        </header>
    )
}
export default Header