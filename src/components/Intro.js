import React from 'react'
// stile
import '../styles/intro.scss'
// media
import LOGO from '../assets/logo.png'

function Intro() {
  return (
    <>
        <img className='logoBrice' src={LOGO} alt="logo-brice" />
    </>
  )
}

export default Intro