import React from 'react'
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subsrciption">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best deals
        </p>
        <p className="footer-subscription-text">
          You can subscribe or unsubscribe at anytime
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Email" className="footer-input" />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer link-NavbarItems">
            <Link to="/sign-up">How it works</Link>
            <Link to='/'>Testimonials</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
