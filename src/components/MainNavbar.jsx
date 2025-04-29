import { useState } from 'react';
import { NavLink } from "react-router-dom";
import './styles/navbar.css';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(open => !open);
  };

  const toggleDropdown = (e) => {
    // Só ativa no mobile
    if (window.innerWidth <= 991) {
      e.stopPropagation();
      setDropdownOpen(open => !open);
    }
  };

  return (
    <div>
      <Logo />

      <div className="main__nav">
        <nav className={"navbar__menu" + (isOpen ? ' active' : '')}>
          <ul onClick={toggleMenu}>
            <li
              className={`dropdown ${dropdownOpen ? 'open' : ''}`}
              onClick={toggleDropdown}
            >
              Work
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
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={"navbar__hamburger" + (isOpen ? ' active' : '')}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
