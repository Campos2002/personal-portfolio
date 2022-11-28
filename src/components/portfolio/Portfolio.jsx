import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Secrete Word',
    github: 'https://github.com/Campos2002/secret-word-game',
    demo: 'https://campos2002.github.io/secret-word-game/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'BMI Calculator',
    github: 'https://github.com/Campos2002/calc_de_IMC',
    demo: 'https://campos2002.github.io/calc_de_IMC/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Bank Landing Page',
    github: 'https://github.com/Campos2002/Virtual-Bank-Landing-Page',
    demo: 'https://campos2002.github.io/Virtual-Bank-Landing-Page/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Netflix Hompage Clone',
    github: 'https://github.com/Campos2002/Clone-Netflix-Landing-Page',
    demo: 'https://campos2002.github.io/Clone-Netflix-Landing-Page/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Spotify Homepage Clone',
    github: 'https://github.com/Campos2002/Clone-Spotify-Landing-Page',
    demo: 'https://campos2002.github.io/Clone-Spotify-Landing-Page/'
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Secret Word</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Campos2002/secret-word-game" className='btn' target='_blank' rel='noreferrer'>GitHub</a>
            <a href="https://campos2002.github.io/secret-word-game/" className='btn btn-primary' target='_blank' rel='noreferrer'>Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio;