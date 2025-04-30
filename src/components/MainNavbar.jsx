import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import './styles/navbar.css';
import Logo from './Logo';
import { LiaHomeSolid } from "react-icons/lia";

const MainNavbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <div>
      <Logo />

      <div className="main__nav">
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li className="dropdown" onClick={window.innerWidth <= 991 ? toggleDropdown : undefined}>
              Work
              <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <li><NavLink to="/patterns" onClick={closeAll}>Patterns</NavLink></li>
                <li><NavLink to="/logos" onClick={closeAll}>Logos</NavLink></li>
                <li><NavLink to="/uxui" onClick={closeAll}>UXUI</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/about" onClick={closeAll}>About</NavLink></li>
            <li><NavLink to="/shop" onClick={closeAll}>Shop</NavLink></li>
            <li><NavLink to="/contact" onClick={closeAll}>Contact</NavLink></li>
            <br />
           <Link to="/" className='home__icon'><LiaHomeSolid /></Link>
          </ul>
        </nav>
        
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      
    </div>
  );
};

export default MainNavbar;
