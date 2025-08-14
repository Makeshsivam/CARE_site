import React, { useRef } from 'react'
import './Videoplayer.css'
import Video1 from '../../assets/images/CAREVIDEO.mp4'

const Videoplayer = ({playstae, setPlaystate}) => {
    const player= useRef(null);
    const closeplayer = (e) => {
        if (e.target === player.current) {
            setPlaystate(false);
        }
    }
  return (
    <div className={`videoplayer ${playstae ? '' : 'hide'}`} ref={player} onClick={closeplayer}>
      <video src={Video1} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
