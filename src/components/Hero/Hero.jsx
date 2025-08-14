
import './Hero.css'
import Dark from '../../assets/images/arrow.png'
const Hero = () => {
  return (
    <div className='hero navbar ' id='Hero'>
      <div className="hero-text">
        <h1>We Ensure better Education for a better world</h1>
        <p>CARE Engineering College stands as a hub for innovation, research, 
            and hands-on learning, shaping future-ready engineers and leaders.</p>
        <button className='btn'>Explore more<img src={Dark}></img></button>
      </div>
    </div>
  )
}

export default Hero
