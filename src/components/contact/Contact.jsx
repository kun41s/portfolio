import React from 'react'
import "./contact.css"
import {MdMailOutline} from "react-icons/md";
import {AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai";

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdMailOutline className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>sonwanekks12@gmail.com</h5>
            <a href="mailto:sonwanekks12@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className='contact_option_icon'/>
            <h4>LinkedIn</h4>
            <h5>Kunal Sonwane</h5>
            <a href="https://www.linkedin.com/in/kun41s" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <AiOutlineGithub className='contact_option_icon'/>
            <h4>Github</h4>
            <h5>kun41s</h5>
            <a href="https://www.github.com/kun41s" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        
        <form action="">
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact