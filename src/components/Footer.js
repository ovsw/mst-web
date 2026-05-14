/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line

import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__wrapper'>
      <footer className='footer'>
        <div className='footer__inner-wrapper'>

          <div className='footer__social-media'>
            <a href='https://www.facebook.com/mainstages' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
            {/* <a href='https://twitter.com/mainstages' target='_blank' rel='noopener noreferrer'><FaTwitter /></a> */}
            <a href='https://www.instagram.com/mainstages/' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            <a href='https://www.youtube.com/user/mainstages' target='_blank' rel='noopener noreferrer'><FaYoutube /></a>

          </div>

          <div className='footer__logos'>
            <a href='http://www.nystea.org/' className='footer__logo-link'><img src='/images/nystea-logo.png' alt='Mainstages Logo' /></a>
            <a href='https://nycaieroundtable.org/' className='footer__logo-link'><img src='/images/roundtable-logo.jpg' alt='Roundtable Logo' /></a>
            <a href='http://mainstages.com/' className='footer__logo-link'><img src='/images/mainstages-logo-classic.png' alt='Mainstages Logo' /></a>
          </div>

          <div className='footer__row'>

            <div className='footer__column footer__column--1'>
              <div className='adr'>
                <div className='street-address'>2011 Lemoine Ave.</div>
                <div>
                  <span>Ste. 302</span>
                </div>
                <div>
                  <span className='locality'>Fort Lee</span>, <span className='region' title='New Jersey'>New Jersey</span>
                  <span className='postal-code'> 07024</span>
                </div>
                <div className='country-name'>USA</div>
              </div>
            </div>

            <div className='footer__column footer__column--2'>
              <div>Phone: <a className='tel' href='tel:+1-347-878-2431'>347-878-2431</a></div>
              <div>Email: <a href='mailto:support@mainstages.com' className='email'>support@mainstages.com</a></div>
            </div>
          </div>

          <p className='footer__copyright'>Copyright ©{new Date().getFullYear()} Mainstages. All Rights Reserved | Website by <a href='http://ovswebsites.com/' target='_blank' rel='noopener noreferrer'>OVS Websites</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
