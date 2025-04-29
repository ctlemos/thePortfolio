import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logosData from '../../assets/js/logosData';
import './styles/logos.css';

function Logos() {
    const galleryRef = useRef(null);
    const navigate = useNavigate();

    const openLogosMockupsPage = (id) => {
        navigate(`/logo/${id}`);
    };
    
  return (
    <div className="logos__container">
    
        <div className="logos__gallery" ref={galleryRef}>
            {logosData.map((logo, index) => (
              <div className="logos__item" key={index} onClick={() => openLogosMockupsPage(logo.id)}>
                <img src={logo.src} alt={logo.name} />
                <h2>{logo.name}</h2>
              </div>
            ))}
        </div>
    </div>
  );
}

export default Logos;