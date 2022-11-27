import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* 1 Services */}
        <article className="services">
          <div className="services__head">
            <h3>UI/UX Designe</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
          </ul>
        </article>
        {/* 2 Services */}
        <article className="services">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
          </ul>
        </article>
        {/* 3 Services */}
        <article className="services">
          <div className="services__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
            <li>
              <BiCheck className='services__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;