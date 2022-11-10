import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/navbarMobile.scss'
import LOGO from '../assets/logo.png'
import textLogo from '../assets/text-logo.png'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'

function NavbarMobile() {

    let navigate = useNavigate()

    const [menuVisible, setMenuVisible] = useState(false)

    const getMenu = () => {
        setMenuVisible(!menuVisible)
    }

    const navigation = (route) => () => {
        navigate(`${route}`)
    }

    return (
        <header id='headerMobile'>
            <nav id='navMobile' className='container mx-auto'>
                <div className="hamburger">
                    {
                        menuVisible ?
                        <AiOutlineClose onClick={getMenu}/>
                        :
                        <AiOutlineMenu onClick={getMenu}/>
                    }
                </div> 
                <div className="navLogo">
                    <img src={textLogo} alt="logo" />
                </div>
            </nav>
            <section className={`dropDownMobile ${menuVisible ? 'activeDDMobile' : ''}`}>
                <ul>
                    <li onClick={navigation('/')}>
                        HOME
                    </li>
                    <li onClick={navigation('/gallery')}>
                        FOTO
                    </li>
                    <li onClick={navigation('/service')}>
                        SERVIZI
                    </li>
                    <li onClick={navigation('/listen')}>
                        ASCOLTA
                    </li>
                    <li onClick={navigation('/setup')}>
                        SETUP
                    </li>
                    <li onClick={navigation('/contacts')}>
                        CONTATTI
                    </li>
                </ul>
            </section>
        </header>
    )
}

export default NavbarMobile