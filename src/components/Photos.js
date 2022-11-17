import React, { useState } from 'react'
// stile
import '../styles/photos.scss'
// media
import StudioImage from '../assets/studio-bw-scolor.png'
import tasiera from '../assets/tastiera.png'
import cabin from '../assets/cabina-bw.png'

function Photos() {

    const [state, setState] = useState({
        studio: false,
        tastiera: false,
        cabin: false
    })

    function viewStudio() {
        setState({
            studio: !state.studio,
            tastiera: false,
            cabin: false
        })
    }

    function viewCabin() {
        setState({
            studio: false,
            tastiera: false,
            cabin: !state.cabin
        })
    }

    function viewTastiera() {
        setState({
            studio: false,
            tastiera: !state.tastiera,
            cabin: false
        })
    }

    return (
        <>
            <div className='description'>
                <h1>
                    FOTO DELLO STUDIO
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe, nihil sed similique, mollitia, nostrum harum dolores numquam sint suscipit omnis enim nisi eaque rerum. Voluptatum officia quibusdam vero officiis magnam libero ea quia dicta cumque numquam quisquam incidunt, quae ab, adipisci placeat. Blanditiis iure quam fugit expedita itaque reprehenderit!</p>
                <div className="button">
                    <button className="buttonSecondary">
                        View more
                    </button>
                </div>
            </div>
            <div className='image'>
                <div className='studioImage '>
                    <img onClick={viewStudio} className={`studioImageOne ${state.studio ? 'activeImage' : ''}`} src={StudioImage} alt="imageStudio" />
                    <img onClick={viewCabin} className={`studioImageTwo ${state.cabin ? 'activeImage' : ''}`} src={cabin} alt="imageStudio" />
                    <img onClick={viewTastiera} className={`studioImageTrhee ${state.tastiera ? 'activeImage' : ''}`} src={tasiera} alt="imageStudio" />
                </div>
            </div>
        </>
    )
}

export default Photos