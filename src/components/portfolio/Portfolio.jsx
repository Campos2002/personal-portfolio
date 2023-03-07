import React from 'react'
import './portfolio.css'
import data from '../portfolio/data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Portfólio</h5>
      <h2>Principais Projetos</h2>

      <div className="container portfolio__container">
        {
          data.map(({ image, title, github, demo, section }, index) => (
            <article key={index} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Demo</a>
                <p>{section}</p>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio;