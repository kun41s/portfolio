import React from 'react'
import "./header.css"
import CTA from "./CTA";
import ME from "../../assets/me.png"
import Socials from './Socials';

function Header() {
  return (
      <header id='home'>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Kunal Sonwane</h1>
        <h5 className='text-light'>MERN Developer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>    
  )
}

export default Header