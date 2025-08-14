
import './About.css'
import AboutImage from '../../assets/images/Graduate.jpg'
import play from '../../assets/images/play.png'
const About = ({setPlaystate}) => {
    return (
        <div className='about container' id='About'>
            <div className='about-left'>
                <img src={AboutImage} alt="About Us" className='Aboutimg' />
                <img src={play} alt="Play Video" className='play' onClick={()=>{setPlaystate(true)}}  />
            </div>
            <div className='about-right'>
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                
                <p>
                    Empowering students with knowledge, values, and vision. At CARE, we are committed to academic excellence, innovation,
                    and holistic development. Join a vibrant community that shapes future leaders and change-makers.
                </p>
                <p>
                    CARE is a premier institution dedicated to nurturing talent and fostering academic excellence. Established in 2009,
                    we offer a wide range of undergraduate and postgraduate programs in Arts, Science, Commerce, and Technology.
                    Our mission is to inspire, educate, and empower students to achieve their full potential in a rapidly changing world.
                </p>
                <p>CARE  is a center of academic excellence that fosters innovation, leadership, and lifelong learning. We offer a wide range of programs designed to equip students with knowledge, skills, and values needed in a competitive world. Our dedicated faculty,
                     modern infrastructure, and vibrant student community make us a preferred choice for higher education.</p>

            </div>
        </div>

    )
}

export default About
