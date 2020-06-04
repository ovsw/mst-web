/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useContext} from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import SubMenu from './SubMenu'

import './Nav.css'

import {useSiteMenusStructure} from '../../../hooks/use-site-menus-structure'
import {appContext} from '../../../context'

const Nav = ({isMobileNavOpen, closeMobileNav}) => {
  const menuStructure = useSiteMenusStructure()
  const {activeSisteSection} = useContext(appContext)

  let menuToShow = null

  switch (activeSisteSection) {
    case 'virtual':
      menuToShow = menuStructure.filter(menu =>
        menu.id === '520e71b4-3698-5363-8839-8f77332aa571'
      )[0]
      break
    case 'programming':
      menuToShow = menuStructure.filter(menu =>
        menu.id === '37f6f332-c2e8-5c5c-affc-74bf0f5aa765'
      )[0]
      break
    case 'performances':
      menuToShow = menuStructure.filter(menu =>
        menu.id === '5f27afbc-dcbd-5cfb-8c05-f55182adcfa1'
      )[0]
      break
  }
  // TODO: add responsive tabs to nav
  return (
    <nav className={`top-nav__header-menu ${isMobileNavOpen ? 'visible' : ''}`}>
      <div className='top-nav__main-menu-wrapper'>
        <div className='top-nav__menus' style={{maxHeight: '747.656px'}}>
          <p className='top-nav__mobile-title'>{menuToShow.title}</p>
          <ul className='top-nav__outer-list' id='menu-main-menu'>
            {menuToShow.items.map((item) => {
              // console.log(item)
              let linkUrl = null
              let title = null
              let subItems = []

              switch (item._type) {
                case ('internalLinkWSlug'):
                  title = item.title
                  linkUrl = item.url
                  break
                case ('internalLinkWChildren'):
                  title = item.title
                  linkUrl = item.link.content.main.slug.current
                  subItems = item.subItems
                  break
                case ('internalLink'):
                  title = item.title
                  linkUrl = item.link.content.main.slug.current
                  break
              }

              return (
                <li key={linkUrl} className={`top-nav__item-level-1 menu-item ${subItems.length > 0 ? 'top-nav__has-children' : ''}`}>
                  <Link to={`/${linkUrl}/`} onClick={() => closeMobileNav()}>{title}</Link>
                  {(subItems.length > 0) && <SubMenu subItems={subItems} closeMobileNav={closeMobileNav} />}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='menu-cross-links'><span className='menu-cross-links__title'><a href='tel:1-347-878-2431'> 347-878-2431</a></span></div>
      </div>
      <div className='top-nav__image-buttons-wrapper'>
        <Link to='/virtual/' className={`image-button ${activeSisteSection !== 'virtual' ? 'sectionSwitch_btn--virtual' : ''}`}><span>Virtual Entertainment</span></Link>
        <Link to='/programming/' className={`image-button ${activeSisteSection !== 'programming' ? 'sectionSwitch_btn--programming' : ''}`}><span>In-person Programs</span></Link>
        <Link to='/performances/' className={`image-button ${activeSisteSection !== 'performances' ? 'sectionSwitch_btn--performances' : ''}`}><span>In-person Performances</span></Link>
        {/* <a href='/programming/camp-package/' className='image-button'><span>Our Camp Package</span></a> */}
        {/* <a href='/virtual/recommended-camps/' className='image-button'><span>Camp Partnerships</span></a> */}
      </div>
    </nav>
  )
}

export default Nav
