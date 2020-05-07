/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import {FaChevronRight} from 'react-icons/fa'

export default ({node}) => {
  console.log(node)
  return (
    <div sx={{
      bg: 'secondary',
      my: 5,
      width: ['full', null, null, null, '120%'],
      ml: ['auto', null, null, null, '-10%'],
      borderRadius: 'lg',
      padding: 4,
      p: {
        variant: 'styles.h3',
        mt: 0,
        color: 'light'
      }
    }}
    >
      <p>{node.text}</p>
      <div sx={{textAlign: 'left', mt: 3}}>
        <Link to={node.url} sx={{variant: 'buttons.simpleWhite'}}>{node.buttonText} <FaChevronRight sx={{position: 'relative', top: '0.25rem'}} /></Link>
      </div>
    </div>
  )
}
