/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React, {useContext} from 'react' // eslint-disable-line
import {Link} from 'gatsby'

const Casette = ({title, subtitle, description, url}) => {
  return (
    <div className='slidecards__card of-4'>
      {/* ^^ this was used for bg image */}
      <div className='slidecards__card-wrapper n-2'>
        <h3 className='slidecards__card-title n-2'><span>{title}</span></h3>
        <h4 className='slidecards__card-subtitle'>{subtitle}</h4>
        <p className='slidecards__card-description'>{description}</p>
        <Link href={url} className='button slidecards__card-button n-2'>learn more</Link>
      </div>
    </div>
  )
}

export default Casette
