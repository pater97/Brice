import React from 'react'

// stile
import '../styles/service.scss'
// assets
import MIC from '../assets/microfono.png'
import LOGIC from '../assets/logic.png'

function ServiceCard() {

    return (
        <div className='card-container'>
            <img src={MIC} className={'microphone'} alt="" />
            <div className='titleCard'>
                <h2>
                    REGISTRAZIONE
                </h2>
            </div>
            <div className='titleCard'>
                <h2>
                    MIX E MASTER
                </h2>
            </div>
            <div className='titleCard'>
                <h2>
                    DIREZIONE ARTISTICA
                </h2>
            </div>
        </div>
    )
}

export default ServiceCard