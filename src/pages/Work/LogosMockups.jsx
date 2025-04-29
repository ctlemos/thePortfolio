import React from 'react';
import { useParams, Link } from 'react-router-dom';
import logosData from '../../assets/js/logosData.js';
import './styles/logosMockups.css';
import { IoIosArrowBack } from "react-icons/io";
import BackTopBtn from '../../components/BackTopBtn.jsx';

const LogosMockups = () => {
  const { id } = useParams();
  const logo = logosData.find(item => item.id === parseInt(id));

  if(!logo){
    return <h2>Error 404: Logo Not Found</h2>;
}

  return (
    <div className="logos-mockups__container">
      <Link to="/logos" className='logos-back_btn'><IoIosArrowBack /></Link>

      {/* <h1>{logo?.name}</h1> */}
      <div className="logos-mockups__gallery">
        {logo.pdfImage.map((img, index) => (
          <div key={index} className="logos-mockup__img-container">
            <img src={img} alt={`Mockup ${index + 1}`} className="logos-mockup__img" />
          </div>
        ))}
      </div>
      <BackTopBtn />
    </div>
  );
};

export default LogosMockups;