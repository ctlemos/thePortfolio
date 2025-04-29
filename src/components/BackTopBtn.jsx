import React from 'react';
import { BiArrowToTop } from "react-icons/bi";
import './styles/topBtn.css';

const BackTopBtn = () => {
    const top = () => {
        window.scrollTo(0, 0);
    };

  return (
    <div className='top_btn' onClick={top}><BiArrowToTop /></div>
  )
}

export default BackTopBtn