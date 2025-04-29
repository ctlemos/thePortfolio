import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import patternsData from '../../assets/js/patternsData.js';
import './styles/patterns.css';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function Patterns() {
  const galleryRef = useRef(null);
  const navigate = useNavigate();

  const duplicatedData = [...patternsData, ...patternsData]; // duplica os items

  // GALLERY SCROLL
  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 500, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const gallery = galleryRef.current;
    const scrollWidth = gallery.scrollWidth;
    const clientWidth = gallery.clientWidth;

    if (gallery.scrollLeft + clientWidth >= scrollWidth - 1) {
      gallery.scrollLeft = 0;
    }

    if (gallery.scrollLeft <= 0) {
      gallery.scrollLeft = scrollWidth / 2;
    }
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    gallery.addEventListener('scroll', handleScroll);
    return () => gallery.removeEventListener('scroll', handleScroll);
  }, []);

  const openPatternsMockupsPage = (id) => {
    navigate(`/pattern/${id}`);
  };

  return (
    <div className="patterns__container">
      <button onClick={scrollLeft} className="arrow left"><IoIosArrowDropleftCircle /></button>

      <div className="patterns__gallery" ref={galleryRef}>
        {duplicatedData.map((pattern, index) => (
          <div className="patterns__item" key={index} onClick={() => openPatternsMockupsPage(pattern.id)}>
            <img src={pattern.src} alt={pattern.name} />
            <h2>{pattern.name}</h2>
          </div>
        ))}
      </div>

      <button onClick={scrollRight} className="arrow right"><IoIosArrowDroprightCircle /></button>
    </div>
  );
}

export default Patterns;
