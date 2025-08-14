
import './Campus.css';
import Gallery_1 from '../../assets/images/Gallery_1.jpg';
import Gallery_2 from '../../assets/images/Gallery_2.jpg';
import Gallery_3 from '../../assets/images/Gallery_3.jpg';
import Gallery_4 from '../../assets/images/Gallery_4.webp';
import WhiteDark from '../../assets/images/White_arrow.jpg';

const Campus = () => {
  return (
    <div className="campus container" id='Campus'>
      <div className="gallery-wrapper">
        <div className="gallery-scroll">
          <img src={Gallery_1} alt="Gallery 1" />
          <img src={Gallery_2} alt="Gallery 2" />
          <img src={Gallery_3} alt="Gallery 3" />
          <img src={Gallery_4} alt="Gallery 4" />
          <img src={Gallery_1} alt="Gallery 1" />
          <img src={Gallery_2} alt="Gallery 2" />
          <img src={Gallery_3} alt="Gallery 3" />
          <img src={Gallery_4} alt="Gallery 4" />
        </div>
      </div>

      <button className="btn dark_btn">
        View More <img src={WhiteDark} alt="Arrow" />
      </button>
    </div>
  );
};

export default Campus;
