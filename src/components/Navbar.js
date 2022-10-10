import React from 'react'
import { useState , useEffect} from 'react'

function Navbar() {
    // stati
    const [dropdow, setDrop] = useState(false)
    const [scroll, setScroll] = useState(false)
    // dropdown
    function drop() {
        setDrop(true)
    }
    function noDrop() {
        setDrop(false)
        console.log('nodrop')
    }

    // effetto allo scroll
    function handleScroll() {
        let windowScroll = window.scrollY;
        let scrolly = false;
        if (windowScroll > 110) {
            scrolly = true;
        }
        setScroll(scrolly)
        console.log(scroll)
    }
    //   metto in ascolto
    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <div id='header' className={scroll ? 'activeHide' : ''}>
            <div className='banda'></div>
            <nav id='nav'>
                <div className='Home'>
                    <a href='#'>
                        HOME
                    </a>
                </div>
                <div className='brice'>
                    <a href='#' onFocus={drop} onBlur={noDrop}>
                        B®ICE-STUDIO
                    </a>
                    <div className='dropdown'>
                        <ul className={`dropdown ${dropdow ? 'activeDrop' : ''}`}>
                            <li>
                                FOTO
                            </li>
                            <li>
                                SERVIZI
                            </li>
                            <li>
                                ASCOLTA
                            </li>
                            <li>
                                SETUP
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='contatti'>
                    <a href='#'>
                        CONTATTI
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar