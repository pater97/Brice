import React, { Component } from 'react'
// import { useState , useEffect} from 'react'
import '../styles/navbar.scss'

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
        this.setState({ dropDown: true })
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


    render() {

        return (
            <div id='header' className={this.state.scroll ? 'activeHide' : ''}>
                <div className='banda'></div>
                <nav id='nav'>
                    <div className='Home'>
                        <button>
                            <h4>
                                HOME
                            </h4>
                        </button>
                    </div>
                    <div className='brice'>
                        <button onFocus={this.drop} onBlur={this.noDrop}>
                            <h4>
                                B®ICE-STUDIO
                            </h4>
                        </button>
                        <div className='dropdown'>
                            <ul className={`dropdown ${this.state.dropDown ? 'activeDrop' : ''}`}>
                                <li>
                                    <button>
                                        <h4>
                                            FOTO
                                        </h4>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h4>

                                            SERVIZI
                                        </h4>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h4>

                                            ASCOLTA
                                        </h4>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h4>
                                            SETUP
                                        </h4>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='contatti'>
                        <button>
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

export default Navbar