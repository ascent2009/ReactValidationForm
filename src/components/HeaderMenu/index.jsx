import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import HamburgerSvg from '../../assets/hamburger.svg'
import '../../App.scss'

const HeaderMenu = () => {
    const [menu, setMenu] = useState(null)
    const [style, setStyle] = useState(null)
    const displayMenu = () => {
        setTimeout(() => setMenu('value'), 500)
        setTimeout(() => setStyle({display: 'none'}), 500)
        
    }
    const closeMenu = (e) => {
        setTimeout(() => setMenu(), 500)
        setTimeout(() => setStyle(), 500)
    }

    return (
        <header className="header">
            <img src={HamburgerSvg} alt="Меню" title="Открыть меню" className="openMenu" style={style} onClick={displayMenu} />
            {menu ? <nav className="headerMenu" onMouseLeave={closeMenu}>
            <ul className="menu">
                <li className="menuItem"><Link to='/custom'>Пользовательская форма</Link></li>
                <li className="menuItem"><Link to='/formik'>Форма с библиотеками Formik/Yup</Link></li>
            </ul>
            </nav> : null}
        </header>
    )
  }

export default HeaderMenu;