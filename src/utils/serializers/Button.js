/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import {FaChevronRight} from 'react-icons/fa'

export default ({node}) => {
  console.log(node)
  return (
    <div sx={{textAlign: 'left', mt: 3}}>
      <Link to={node.url} class='contentButton'>{node.buttonText} <FaChevronRight sx={{position: 'relative', top: '0.25rem'}} /></Link>
    </div>
  )
}
