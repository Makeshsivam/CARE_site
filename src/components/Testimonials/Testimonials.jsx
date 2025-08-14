import  { useRef } from 'react';
import './Testimonials.css';
import nexticon from '../../assets/images/next.png';
import backicon from '../../assets/images/back.png';
import user1 from '../../assets/images/user1.jpg';
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';
import user4 from '../../assets/images/user4.jpg';  
const Testimonials = () => {
    const slider = useRef();
    let tx=0;
    const slideforward = () => {
        if (tx>-50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const sllideback = () => {
        if (tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }





  return (
    <div className='testimonials container' id='Testimonials'>
        <img src={nexticon} className='next-btn' onClick={slideforward}></img>
        <img src={backicon} className='back-btn' onClick={sllideback}></img>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Pio Johnson</h3>
                                <span>Google,USA</span>
                            </div>
                        </div>
                        <p>My time at CARE laid the foundation for my career, equipping me with the skills and 
                            confidence that helped me secure a role at Google. It was a transformative experience that prepared me for success in the tech industry.
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Praveen</h3>
                                <span>L&T Construction,USA</span>
                            </div>
                        </div>
                        <p>My journey at CARE  played a pivotal role in shaping my career. 
                            The practical learning approach and guidance from 
                            experienced faculty helped me build a strong foundation, 
                            ultimately leading me to a rewarding career at L&T.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Makesh</h3>
                                <span>Infosys,UK</span>
                            </div>
                        </div>
                        <p>The education and support I received at CARE laid a strong foundation for my career. 
                            The skills and values I developed there have been instrumental in helping me grow and succeed at Infosys.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Selva KUMAR</h3>
                                <span>Wipro,USA</span>
                            </div>
                        </div>
                        <p>My time at CARE laid the foundation for my career, equipping me with the skills and 
                            confidence that helped me secure a role at Google. It was a transformative experience that prepared me for success in the tech industry.
                            </p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
