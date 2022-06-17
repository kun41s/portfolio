import React from 'react';
import "./footer.css";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.github.com/kun41s" target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>
        <a href="https://www." target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a>
        <a href="https://www.linkedin.com/in/kun41s" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Kunal Sonwane. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer   