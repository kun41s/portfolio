import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

          {/* WEB DEVELOPMENT */}
          <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Build responsive web applications</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Build infrastructure on web</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Industry standard</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Build frontend with HTML, CSS, ReactJS </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Build backend with NodeJS, ExpressJS, MongoDB</p>
            </li>
          </ul>
          </article>

          {/* APP DEVELOPMENT */}
          <article className='service'>
          <div className="service_head">
            <h3>App Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>End to End useful app</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Build for Android & IOS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Industry standard applications</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Make beautiful frontend using Flutter</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Make backend with NodeJS, ExpressJS & MongoDB</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services