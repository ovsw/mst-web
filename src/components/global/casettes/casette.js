/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
import React, {useContext} from 'react' // eslint-disable-line
import {Link} from 'gatsby'

// import styles from './casettes.module.css'

import {buildImageObj} from '../../../utils/helpers' // cn
import {imageUrlFor} from '../../../utils/image-url'

const Casette = ({title, subtitle, shortDescription, buttonText, buttonUrl, image, alt, i}) => {
  const colorStyles = ['#7d196e', '#482F85', '#993E28', '#1F7E83', '#1F7E31']
  const imageUrl = image
    ? imageUrlFor(buildImageObj(image))
      .width(368)
      .height(200)
      .auto('format')
      .url()
    : ''

  return (
    <div
      className='slidecards__card of-5' sx={{
        boxShadow: 'xl',
        width: 'full',
        bg: 'white',
        borderTop: '3px solid #87CC2F',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}
    >
      {/* ^^ this was used for bg image */}
      {/* <div className={`slidecards__card-wrapper n-${i}`}> */}
      {(imageUrl !== '') && <img src={imageUrl} alt={alt || title} sx={{maxWidth: '100%'}} />}
      <div sx={{
        p: 3
      }}
      >
        <Styled.h4
          as='h3'
          className={`slidecards__card-title n-${i}`} sx={{
            fontSize: [3, 3, 3, 4],
            color: colorStyles[i]
          }}
        >{title}
        </Styled.h4>
        {subtitle && <h4 className='slidecards__card-subtitle'>{subtitle}</h4>}
        <Styled.p sx={{fontSize: 1}} className='slidecards__card-description'>{shortDescription}</Styled.p>
        <Link
          to={buttonUrl} sx={{
            variant: 'buttons.simpleAccentDark',
            // boxShadow: `-3px 3px 0 ${colorStyles[i]}`,
            color: 'white',
            textDecoration: 'none',
            px: 3,
            py: 2,
            bg: colorStyles[i],
            mb: 0,
            boxShadow: 'none'
          }}
        >{buttonText}
        </Link>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Casette
