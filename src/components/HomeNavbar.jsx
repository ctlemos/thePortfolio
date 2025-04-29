import { useState } from 'react';
import { NavLink } from "react-router-dom";
import './styles/navbar.css';
import Logo from './Logo';

const HomeNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div>
      <Logo/>
      
      <div className="home__main-nav">
        <nav className={"navbar__menu" + (isOpen ? ' active' : '')}>
          <ul onClick={toggleMenu}>
            <li className='dropdown'> Work
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/patterns">Patterns</NavLink>
                </li>
                <li>
                  <NavLink to="/logos">Logos</NavLink>
                </li>
                <li>
                  <NavLink to="/uxui">UXUI</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li> 
          </ul>
        </nav>
      </div>

      <div className={"navbar__hamburger" + (isOpen ? ' active' : '')} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default HomeNavbar;
