import React from "react";
import { BsPatchCheckFill } from "react-icons/bs"

function ExperienceArticle(props) {
    return (
        <article className='experience_details'>
        <BsPatchCheckFill className='experience_details_icon'/>
        <div>
          <h4>{props.name}</h4>
          <small className='text-light'>{props.level}</small>
        </div>
      </article>
    )
}

export default ExperienceArticle;