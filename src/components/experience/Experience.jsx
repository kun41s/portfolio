import React from 'react'
import "./experience.css"
import languagesData from './languagesData'
import frameworkData from './frameworkData'
import ExperienceArticle from "./ExperienceArticle"

function Experience() {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Languages</h3>
          <div className="experience_content">
          {
            languagesData.map((data) => (
              <ExperienceArticle 
              key = {data.id}
              name= {data.name}
              level= {data.level}/>
            ))
          }
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience_backend">
          <h3>Frameworks</h3>
          <div className="experience_content">
          {
            frameworkData.map((data) => (
              <ExperienceArticle 
              key = {data.id}
              name= {data.name}
              level= {data.level}/>
            ))
          }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 