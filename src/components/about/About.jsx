import React from 'react'
import "./about.css"
import ME from "../../assets/Boy With Glasses.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_img">
          <div className="about_me-img">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="cards">
            <article className='card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3 Months Working</small>
            </article>

            <article className='card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>5 Clients</small>
            </article>

            <article className='card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Sequi quis, enim consectetur soluta cumque voluptatibus, 
            numquam eaque iusto pariatur temporibus quos totam maiores neque, 
            voluptate vel aspernatur nobis perferendis ut.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About