import './header.css'
import CTA from '../header/CTA'
import ME from '../../assets/me2.png'

const Header = () => {
  return (
    <div>
      <header id='home'>

        <div className="container header__container">

          <h5>Olá! Eu sou</h5>
          <h1>Guilherme Campos</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <CTA />
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>

        </div>

      </header>
    </div>
  )
};

export default Header