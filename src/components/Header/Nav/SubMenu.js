/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useState} from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import {FaPlus} from 'react-icons/fa'

const SubMenu = ({subItems}) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const toggleMenu = (e) => {
    e.preventDefault()
    if (isSubmenuOpen) { setIsSubmenuOpen(false) } else { setIsSubmenuOpen(true) }
  }
  return (
    <>
      <span className='top-nav__submenu-button' sx={{fontSize: 3}} onClick={toggleMenu}><FaPlus /></span>
      {isSubmenuOpen &&
        <ul className='top-nav__inner-list visible'>
          {subItems.map(({title, link: {content: {main: {slug}}}}) => (
            <li key={slug.current} className='top-nav__item-level-3 menu-item'>
              <Link to={slug.current}>{title}</Link>
            </li>
          ))}
        </ul>}
    </>
  )
}

export default SubMenu
