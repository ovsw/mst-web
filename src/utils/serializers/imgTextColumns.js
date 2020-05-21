/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
// import Img from 'gatsby-image'
// import {getFluidGatsbyImage} from 'gatsby-source-sanity'
// import clientConfig from '../../../client-config'

import {buildImageObj} from '../helpers' // cn
import {imageUrlFor} from '../image-url'

export default ({node}) => {
  // console.log('node:', node)
  const thumbSize = {width: 200, height: 200}
  const imageUrl = imageUrlFor(buildImageObj(node.image))
    .width(thumbSize.width)
    // .height(Math.floor((9 / 16) * 600))
    .height(thumbSize.height)
    .auto('format')
    .url()

  return (

    <div sx={styles}>

      <div className='imageWrapper'>
        <img className='side-image rounded-image' src={imageUrl} alt={node.alt} width='200' />
      </div>
      <div className='text'>
        <h3>Pre-K Movement, Puppets, and Imaginative Play</h3>
        <p><strong><em>Wednesdays @ 11 AM EST</em></strong></p>

        <p>Perfect for the preschooler who needs to get some energy out, this interactive session includes puppets, interactive storytelling, movement, and creative play guaranteed to keep your child entertained.</p>
      </div>
    </div>

  )
}

const styles = {
  mx: '-8rem',
  my: 5,
  display: ['block', null, null, 'flex'],
  '.imageWrapper': {
    textAlign: 'center',
    flex: '1 1 30%',
    width: ['block', null, null, '30%'],
    mb: 4,
    p: [0, null, null, 3],
    img: {
      mt: 0,
      display: 'inline-block',
      width: '200px',
      height: '200px',
      borderWidth: '3px !important',
      maxWidth: 'none',
      borderRadius: '50%',
      border: '3px solid white',
      boxShadow: '0 0 12px rgba(0, 0, 0, 0.2)'
    }
  },
  '.text': {
    flex: '1 1 70%',
    px: [3, null, null, 0]
  }
}
