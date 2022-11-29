import React from 'react'
import './testimonials.css'
import data from '../testimonials/data'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Testimonials</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({ id, image, clientName, clientReview }) => (
            <article key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{clientName}</h5>
              <small className='client__review'>
                {clientReview}
              </small>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials