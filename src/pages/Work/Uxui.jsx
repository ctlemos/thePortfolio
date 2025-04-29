import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import uxuiData from '../../assets/js/uxuiData';
import './styles/uxui.css';

function Uxui() {
    const galleryRef = useRef(null);
    const navigate = useNavigate();

    const openUxuiMockupsPage = (id) => {
        navigate(`/uxui/${id}`);
    };
    
  return (
    <div className="uxui__container">
    
        <div className="uxui__gallery" ref={galleryRef}>
            {uxuiData.map((uxui, index) => (
              <div className="uxui__item" key={index} onClick={() => openUxuiMockupsPage(uxui.id)}>
                <img src={uxui.src} alt={uxui.name} />
                <h2>{uxui.name}</h2>
              </div>
            ))}
        </div>
    </div>
  );
}

export default Uxui;