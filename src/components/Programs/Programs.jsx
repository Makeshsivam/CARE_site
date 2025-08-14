
import './Programs.css'
import Program_1 from '../../assets/images/program-1.jpg'
import Program_2 from '../../assets/images/program-2.jpg'
import Program_3 from '../../assets/images/program-3.jpg'
import AI from '../../assets/images/Ai.jpg'
import Mech from '../../assets/images/Mech.jpg'
import Civil from '../../assets/images/Civil.jpg'

const Programs = () => {
  return (
    <div className='programs container' id='Programs'> 
      <div className="program">
        <img src={Program_1} alt="Program 1" />
        <div className="caption">
          <img src={AI} alt="" />
          <p>ARTIFICIAL INTELLIGENCE </p>
        </div>

      </div>
      <div className="program">
        <img src={Program_2} alt="Program 1" />
        <div className="caption">
          <img src={Mech} alt="" />
          <p>Mechanical Engineering</p>
        </div>
      </div>
      <div className="program">
        <img src={Program_3} alt="Program 1" />
        <div className="caption">
          <img src={Civil} alt="" />
          <p>Civil Engineering</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
