import React, { useRef } from 'react'
import './Videoplayer.css'
import Video1 from '../../assets/images/CAREVIDEO.mp4'

const Videoplayer = ({playstae, setPlaystate}) => {
    const player= useRef(null);
    const videoRef = useRef(null);
    const closeplayer = (e) => {
        if (e.target === player.current) {
           if (videoRef.current) {
              videoRef.current.pause();
      }
  
            setPlaystate(false);
        }
    }
  return (
    <div className={`videoplayer ${playstae ? '' : 'hide'}`} ref={player} onClick={closeplayer}>
      <video src={Video1} ref={videoRef} autoPlay muted controls ></video>
    </div>
  )
}

export default Videoplayer
