import './header.css'
import CTA from '../header/CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <div>
      <header>

        <div className="container header__container">
          <h5>Hello, I'm</h5>
          <h1>Guilherme Campos</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <CTA />
        </div>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </header>
    </div>
  )
};

export default Header