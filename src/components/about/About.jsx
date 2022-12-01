import React from 'react'
import './about.css'
import ME from '../../assets/me3.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BiSmile } from 'react-icons/bi'

const about = () => {
  return (

    <section id='about'>

      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">

          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Studying</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Venha ser o primeiro</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>

          </div>

          <p>
            Olá, recrutador! Tudo bem? Me chamo Guilherme Campos, sou graduando em Ciência da Computação e estudante de Front-end. Essa página foi criada por mim com ajuda de alguns tutoriais e muito estudo por conta própria. Espero que através dela consiga mostrar tudo que venho aprendendo. Lógico, ainda tenho muito à aprender, mas sou uma pessoa super disposta a ajudar e adquirir conhecimento. Se você veio à mim com o intuito de me contratar para algum serviço, sinta-se a vontade de usar a seção contato da maneira que desejar, todas as opções são funcionais. Espero receber seu contato o mais breve possível! Até! <BiSmile className='about__icon__text' />
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about;