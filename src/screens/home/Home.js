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
        <section className="intro container mx-auto">
          <Intro/>
        </section>
        {/* sezione immagini */}
        <section className='photos container mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-6'>
          <Photos/>
        </section>  
      {/* sezione servizi */}
      </main>
    </div>
  )
}

export default Home