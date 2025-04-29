import React from 'react';
import './styles/contact.css';
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <section className="contact__section">
            <div className="contact__section-title">
                <h1>Get in Touch</h1>
                <h1>Get in Touch</h1>
                <h1>Get in Touch</h1>
                <h1>Get in Touch</h1>
            </div>

            <div className="contact__info">
                <p>Email:</p>
                <a href="mailto:rutelemosdesign@gmail.com">rutelemosdesign@gmail.com</a>
            </div>

            <div className="contact__social">
                <a
                    href="https://www.linkedin.com/in/rute-lemos-14b6a5193/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-btn">
                    <FaLinkedin />
                </a>
            </div>

        </section>
    </div>
  )
}

export default Contact;