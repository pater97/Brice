import React from 'react'
// stile
import '../styles/service.scss'
// componente card
import ServiceCard from './ServiceCard'
import LOGIC from '../assets/logic.png'



function Service() {

  return (
    <div className='container mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-3'>
        <div className='serviceCardContainer'>
            <ServiceCard
            />
        </div>
        <div className='serviceCardLinkContainer'>
            <h2>SERVIZI</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe, nihil sed similique, mollitia, nostrum harum dolores numquam sint suscipit omnis enim nisi eaque rerum. Voluptatum officia quibusdam vero officiis magnam libero ea quia dicta cumque numquam quisquam incidunt, quae ab, adipisci placeat. Blanditiis iure quam fugit expedita itaque reprehenderit!</p>
            <div className='buttonScopri'>
                <button className='buttonPrimary'>
                    SCOPRI
                </button>
            </div>
        </div>
    </div>
  )
}

export default Service