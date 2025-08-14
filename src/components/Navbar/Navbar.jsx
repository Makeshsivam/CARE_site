import { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/images/logo.ico'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setSticky(window.scrollY > 50);
      } else {
        setSticky(false); // Disable sticky effect on mobile
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <nav className={` navbar ${sticky ? "dark_nav" : ""}`}>
      <img src={Logo} alt="Logo" className="logo" />
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><Link to='Hero' smooth={true} offset={-260} duration={500}>Home</Link></li>
        <li><Link to='Programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='About' smooth={true} offset={-170} duration={500}>About us</Link></li>
        <li><Link to='Campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='Testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='Contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>


    </nav>
  )
}

export default Navbar
