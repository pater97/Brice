import React, { Component } from 'react'
// import { useState , useEffect} from 'react'
import '../styles/navbar.scss'
// navigazione
import withRouter from '../utils/wrapclass-component-routing/withNavigation'
// componente
import NavbarMobile from './NavbarMobile'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dropDown: false,
            scroll: false
        }
    }
    // dropdown
    drop = () => {
        this.setState({ dropDown: !this.state.dropDown })
    }
    noDrop = () => {
        this.setState({ dropDown: false })
    }

    // effetto allo scroll
    handleScroll = () => {
        let windowScroll = window.scrollY;
        let scrolly = false;
        if (windowScroll > 110) {
            scrolly = true;
        }
        this.setState({ scroll: scrolly })
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        return () => {
            window.removeEventListener("scroll", this.handleScroll);
        };
    }

    // navigazione
    navigation = (routes) => () => {
        this.props.router.navigate(`${routes}`)
    }

    render() {

        return (
            <div id='header' className={this.state.scroll ? 'activeHide' : ''}>
                <div className='banda'></div>
                <NavbarMobile/>
                <nav id='nav' className='container mx-auto'>
                    <div className='Home'>
                        <button onClick={this.navigation('/')}>
                            <h4>
                                HOME
                            <div className="activeEffect"></div>
                            </h4>
                        </button>
                    </div>
                    <div className='brice'>
                        <button onClick={this.drop} >
                            <h4>
                                B®ICE-STUDIO
                            <div className="activeEffect"></div>
                            </h4>
                        </button>
                        <div className='dropdown'>
                            <ul className={`dropdown ${this.state.dropDown ? 'activeDrop' : ''}`}>
                                <li>
                                    <button onClick={this.navigation('/gallery')}>
                                        <h4>
                                            FOTO
                                        <div className="activeEffect"></div>
                                        </h4>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={this.navigation('/service')}>
                                        <h4>
                                            SERVIZI
                                            <div className="activeEffect"></div>
                                        </h4>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={this.navigation('/listen')}> 
                                        <h4>
                                            ASCOLTA
                                            <div className="activeEffect"></div>
                                        </h4>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={this.navigation('/setup')}>
                                        <h4>
                                            SETUP
                                            <div className="activeEffect"></div>
                                        </h4>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='contatti'>
                        <button onClick={this.navigation('/contacts')}>
                            <h4>
                                CONTATTI
                                <div className="activeEffect"></div>
                            </h4>
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)