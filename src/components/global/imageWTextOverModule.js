/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import BackgroundImage from 'gatsby-background-image'

// import {buildImageObj} from '../../utils/helpers' // cn
// import {imageUrlFor} from '../../utils/image-url'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

import BlockContent from '@sanity/block-content-to-react'

import serializers from '../../utils/serializers'

const ImageWTextOverModule = ({data}) => {
  console.log(data)
  const {caption, image, text, layout} = data

  const r = layout === 'right' ? '-' : ''
  const fluidProps = getFluidGatsbyImage(image.asset.id, {maxWidth: 1200}, clientConfig.sanity)

  return (
    <section sx={{
      display: 'grid',
      gridTemplateColumns: '100px 1fr 1fr 1fr 100px',
      gridTemplateRows: ['400px 1fr 1fr 200px', null, '100px 1fr 1fr 100px'],
      bg: 'background',
      py: 5,
      marginBottom: '2000px'
    }}
    >
      <div sx={{
        gridColumnStart: [`${r}1`, null, null, `${r}2`],
        gridColumnEnd: [`${r}6`, null, `${r}4`],
        gridRowStart: '2',
        gridRowEnd: ['5', null, '4'],
        position: 'relative',
        zIndex: '100'
      }}
      >
        <div sx={{
          p: [0, 3],
          maxWidth: ['100%', null, 'md', 'xl', null, '2xl'],
          bg: 'white',
          marginLeft: layout === 'right' ? 'auto' : '0',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '2xl'
        }}
        >
          <div sx={{
            variant: 'styles',
            p: [2, null, null, 4],
            '* + h2': {
              marginTop: 0
            }
          }}
          >
            <BlockContent blocks={text} serializers={serializers} />
          </div>
        </div>
      </div>
      <BackgroundImage
        fluid={fluidProps} sx={{
          backgroundPosition: 'center center',
          gridColumnStart: [`${r}1`, null, null, `${r}3`],
          gridColumnEnd: `${r}5`,
          gridRowStart: '1',
          gridRowEnd: ['2', null, '5']
        }}
      />
    </section>
  )
}

export default ImageWTextOverModule

// const desktopImageUrl = imageUrlFor(buildImageObj(image))
//   .width(1920)
// // .height(Math.floor((9 / 16) * 600))
// // .height(thumbSize.height)
//   .auto('format')
//   .url()

// const tabletImageUrl = imageUrlFor(buildImageObj(image))
//   .width(1200)
// // .height(Math.floor((11 / 16) * 1200))
// // .height(thumbSize.height)
//   .auto('format')
//   .url()

// const mobileImageUrl = imageUrlFor(buildImageObj(image))
//   .width(768)
// // .height(Math.floor((11 / 16) * 1200))
// // .height(thumbSize.height)
//   .auto('format')
//   .url()

// {/* <picture>
//         <source srcSet={mobileImageUrl} media='(max-width: 768px)' />
//         <source srcSet={tabletImageUrl} media='(max-width: 1200px)' />
//         <img src={desktopImageUrl} alt={data.caption} />
//       </picture> */}