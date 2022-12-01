import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'

const Experience = () => {
  return (
    <section id='experience'>

      <h5>Experience</h5>
      <h2>Experience</h2>

      {/* Inicio do Frontend */}
      <div className="container experience__container">
        <div>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <artcile className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </artcile>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootsctrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Início do Backend */}
        <div>
          <h3>Backend Development</h3>
          <article className="experience__content__backend">
            <GiProgression className='experience__details-icon-progress' />
            <div>
              <h4>In progress</h4>
            </div>
          </article>
        </div>

      </div>
    </section>
  )
}

export default Experience;