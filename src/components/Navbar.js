import React, { Component } from 'react'
// import { useState , useEffect} from 'react'
import '../styles/navbar.scss'
// navigazione
import withRouter from '../utils/wrapclass-component-routing/withNavigation'

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
    goToHome = () => {
        this.props.router.navigate('/')
    }
    goToContacts = () => {
        this.props.router.navigate('/contacts')
    }
    goToGallery = () => {
        this.props.router.navigate('/gallery')
    }
    goToService = () => {
        this.props.router.navigate('/service')
    }
    goToListen = () => {
        this.props.router.navigate('/listen')
    }
    goToSetup = () => {
        this.props.router.navigate('/setup')
    }


    render() {

        return (
            <div id='header' className={this.state.scroll ? 'activeHide' : ''}>
                <div className='banda'></div>
                <nav id='nav'>
                    <div className='Home'>
                        <button onClick={this.goToHome}>
                            <h4>
                                HOME
                            </h4>
                        </button>
                    </div>
                    <div className='brice'>
                        <button onClick={this.drop}>
                            <h4>
                                B®ICE-STUDIO
                            </h4>
                        </button>
                        <div className='dropdown'>
                            <ul className={`dropdown ${this.state.dropDown ? 'activeDrop' : ''}`}>
                                <li>
                                    <button onClick={this.goToGallery}>
                                        <h4>
                                            FOTO
                                        </h4>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={this.goToService}>
                                        <h4>

                                            SERVIZI
                                        </h4>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={this.goToListen}> 
                                        <h4>

                                            ASCOLTA
                                        </h4>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={this.goToSetup}>
                                        <h4>
                                            SETUP
                                        </h4>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='contatti'>
                        <button onClick={this.goToContacts}>
                            <h4>
                                CONTATTI
                            </h4>
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)