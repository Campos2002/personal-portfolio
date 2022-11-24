import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Experience</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontende">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Intermidiate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Git</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience;