import React from 'react'
import "./portfolio.css"
import Data from "./data"

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container_portfolio">
        {Data.map(({id, image, title, github}) => {
          return (
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item-img">
              <img src={image} alt="portfolio-1" />
            </div>
            <h3>{title}</h3>
            <div className='portfolio_item-cta'>
              <a href={github} className='btn' target="_blank" rel='noreferrer'>Github</a>
              {/* <a href="https://github.com/kun41s/" className='btn btn-primary' target="_blank" rel='noreferrer'>Live Demo</a> */}
            </div>
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio