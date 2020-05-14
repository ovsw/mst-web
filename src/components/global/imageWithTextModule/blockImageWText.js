/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line
import BackgroundImage from 'gatsby-background-image'

import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../../client-config'

import BlockContent from '@sanity/block-content-to-react'
import serializers from '../../../utils/serializers'

const BlockImageWText = ({image, text, layout}) => {
  const fluidProps = getFluidGatsbyImage(image.asset.id, {maxWidth: 1200}, clientConfig.sanity)
  return (
    <section>
      <Container>
        <div sx={{
          display: 'flex',
          my: 5
        }}
        >
          <div sx={{
            variant: 'styles',
            width: ['full', null, null, null, '50%'],
            bg: 'primary',
            p: 5
          }}
          >
            <BlockContent blocks={text} serializers={serializers} />
          </div>

          <BackgroundImage
            fluid={fluidProps} sx={{
              backgroundPosition: 'center center',
              width: '50%'
            }}
          />
        </div>
      </Container>
    </section>
  )
}

export default BlockImageWText

// <BackgroundImage
//         fluid={fluidProps} sx={{
//           backgroundPosition: 'center center',
//           gridColumnStart: [`${r}1`, null, null, `${r}3`],
//           gridColumnEnd: [`${r}6`, null, null, `${r}5`],
//           gridRowStart: '1',
//           gridRowEnd: ['2', null, '5']
//         }}
//       />
