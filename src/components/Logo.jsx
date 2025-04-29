import React from 'react';
import {Link, useLocation} from "react-router-dom";
import './styles/logo.css';

const Logo = () => {
  const location = useLocation();
  const isHome = location.pathname === '/'; 

  return (
    <div>
        <header className="main__header">
          <Link to="/">
            <img className={`logo ${isHome ? 'logo_white' : 'logo_black'}`} src="/images/logo-white.png" alt="logo"/>
          </Link>
        </header>
    </div>
  )
}

export default Logo;