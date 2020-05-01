/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import './Nav.css'

const Nav = ({isMobileNavOpen}) => {
  return (
    <nav className={`top-nav__header-menu ${isMobileNavOpen ? 'visible' : ''}`}>
      <div className='top-nav__main-menu-wrapper'>
        <div className='top-nav__menus' style={{maxHeight: '747.656px'}}>
          <p className='top-nav__mobile-title'>Families</p>
          <ul className='top-nav__outer-list' id='menu-main-menu'>
            <li className='top-nav__item-level-1 first menu-item p-1'><a href='/'>mainstages Home</a><span className='top-nav__submenu-button' /></li>
            <li className='top-nav__item-level-1 top-nav__current menu-item p-1336'><a href='/virtual/'>Virtual Home</a><span className='top-nav__submenu-button' /></li>
            <li className='top-nav__item-level-2 menu-item p-2439'><a href='/virtual/mainstages-live-at-home/'>Virtual Entertainment for Organizations</a><span className='top-nav__submenu-button' /></li>
            <li className='top-nav__item-level-2 menu-item p-2471'><a href='/virtual/virtual-events-online-kids-families-adults/'>Virtual Weekly Classes for Kids</a><span className='top-nav__submenu-button' /></li>
            <li className='top-nav__item-level-2 menu-item p-2516'><a href='/virtual/virtual-adult-trivia-night/'>Virtual Adult Trivia Happy Hour</a><span className='top-nav__submenu-button' /></li>
            <li className='top-nav__item-level-2 top-nav__has-children menu-item p-1715'><a href='/virtual/recommended-camps/'>Recommended Camps</a><span className='top-nav__submenu-button' />
              <ul className='top-nav__inner-list'>
                <li className='top-nav__item-level-3 first menu-item p-1717'><a href='/virtual/recommended-camps/shine-with-jcamps-in-los-angeles/'>Shine with JCamps LA</a><span className='top-nav__submenu-button' /></li>
                <li className='top-nav__item-level-3 menu-item p-1719'><a href='/virtual/recommended-camps/create-with-camp-twelve-trails-nyc/'>CREATE with Camp Twelve Trails NYC</a><span className='top-nav__submenu-button' /></li>
                <li className='top-nav__item-level-3 menu-item p-2164'><a href='/virtual/recommended-camps/omanoot-theater-camp-with-jcc-northern-virginia/'>Omanoot Theater Camp with JCC Northern Virginia</a><span className='top-nav__submenu-button' /></li>
                <li className='top-nav__item-level-3 menu-item p-2208'><a href='/virtual/recommended-camps/summer-stages/'>Summer Stages Theater Camp</a><span className='top-nav__submenu-button' /></li>
                <li className='top-nav__item-level-3 last menu-item p-2410'><a href='/virtual/recommended-camps/mainstages-day-camp-stamford-jcc/'>What a Production! with Day Camp@The J</a><span className='top-nav__submenu-button' /></li>
              </ul>
            </li>
            <li className='top-nav__item-level-2 menu-item p-2477'><a href='/virtual/stay-at-home-theater-fun/'>Stay at Home Theater Games and Resources</a><span className='top-nav__submenu-button' /></li>
            <li className='top-nav__item-level-2 top-nav__has-children menu-item p-1440'><a href='/virtual/about-us/'>About Us</a><span className='top-nav__submenu-button' />
              <ul className='top-nav__inner-list'>
                <li className='top-nav__item-level-3 first menu-item p-1445'><a href='/virtual/about-us/directors/'>Our Directors</a><span className='top-nav__submenu-button' /></li>
                <li className='top-nav__item-level-3 menu-item p-1472'><a href='/virtual/about-us/testimonials/'>Testimonials</a><span className='top-nav__submenu-button' /></li>
                <li className='top-nav__item-level-3 last menu-item p-1896'><a href='/virtual/about-us/year-round-staff/'>Year-Round Staff</a><span className='top-nav__submenu-button' /></li>
              </ul>
            </li>
            <li className='top-nav__item-level-2 menu-item p-1505'><a href='/virtual/get-a-party-quote/'>Get a Party Quote</a><span className='top-nav__submenu-button' /></li>
            <li className='top-nav__item-level-2 menu-item p-1509'><a href='/virtual/contact-us/'>Contact</a><span className='top-nav__submenu-button' /></li>
            <li className='top-nav__item-level-2 last menu-item p-2605'><a href='/virtual/demo/'>Schedule your Zoom Demo</a><span className='top-nav__submenu-button' /></li>
          </ul>
        </div>
        <div className='menu-cross-links'><span className='menu-cross-links__title'><a href='tel:1-347-878-2431'> 347-878-2431</a> </span></div>
      </div>
      <div className='top-nav__image-buttons-wrapper'>
        <a href='/performances/' className='image-button'><span>In-Person Performances</span></a>
        <a href='/programming/' className='image-button'><span>In-Person Programs</span></a>
        <a href='/programming/camp-package/' className='image-button'><span>Our Camp Package</span></a>
        <a href='/virtual/recommended-camps/' className='image-button'><span>Camp Partnerships</span></a>
      </div>
    </nav>
  )
}

export default Nav
