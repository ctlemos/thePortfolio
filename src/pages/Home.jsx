import React from 'react';
import { motion } from 'framer-motion';
import {NavLink} from "react-router-dom";
import './styles/home.css';
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  return (
    <main>
        
        <section className='home__main'>
            <div className='home__main-wrapper'>
                <h1 className='home__main-title'>The Portfolio</h1>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  className="text-white">

                  <IoIosArrowDown size={32} />
                  
                </motion.div>
            </div>   
        </section>

        <section className="home__section">
            <div className="home__section-wrapper">
                <img className='home__second-img' src="/images/img_home_main_page.png" alt="img" />
                
               <NavLink to="/contact" className="home__section-contact">Contact</NavLink>
            </div> 
        </section>
        
    </main>
  )
}

export default Home;