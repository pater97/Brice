import React,{useState} from 'react'
// components
import Navbar from '../../components/Navbar'
import Photos from '../../components/Photos'
import Intro from '../../components/Intro'
// media
import briceText from '../../assets/logo.png'
// style
import './home.scss'

function Home() {

 

  return (
    <div >
      <Navbar />
      <main id='home'>
        {/* sezione home */}
        <section className="intro">
          <Intro/>
        </section>
        {/* sezione immagini */}
        <section className='photos'>
          <Photos/>
        </section>  
      {/* sezione servizi */}
      </main>
    </div>
  )
}

export default Home