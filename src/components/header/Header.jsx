import './header.css'
import CTA from '../header/CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div>
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Guilherme Campos</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <CTA />
          <HeaderSocials />
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