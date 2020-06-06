/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line

import BlockContent from '@sanity/block-content-to-react'

import serializers from '../../utils/serializers'

const StandardText = ({data}) => {
  const {text} = data
  return (
    <section
      sx={{variant: ['styles'], bg: 'background'}}
    >
      <Container sx={{maxWidth: '760px', py: [4, 5]}}>
        <BlockContent blocks={text} serializers={serializers} />
      </Container>
    </section>
  )
}
export default StandardText
