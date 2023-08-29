import { NavLink } from 'react-router-dom'
import HomeLogo from '../../assets/Memoji.png'
import { useState, useEffect } from 'react'

function Header(props) {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > (props.scroll)) {
                setOpen(false)
            } else {
                setOpen(true);
            }
        });
    }, []);
    
    return(
        <header id="Banniere">
            <div className={open ? "nav" : "nav__background"}>
                <div className='div__img'>
                    <img src={HomeLogo} alt="Logo" />
                </div>
                <nav>
                    <div className='nav__acc'>
                        <a href="#a_propos">{props.lien1}</a>
                        <a href="#formation">{props.lien2}</a>
                        <a href="#projet">{props.lien3}</a>
                        <a href="#contact">{props.lien4}</a>
                    </div>
                    <div className='nav__projet'>
                        <NavLink to="/">{props.lien5}</NavLink>
                        <a href='#contact'>{props.lien6}</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header