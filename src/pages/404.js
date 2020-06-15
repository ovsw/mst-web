/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React from 'react' // eslint-disable-line
// import {graphql, Link} from 'gatsby'
// import {mapEdgesToNodes, localizeText} from '../lib/helpers'
// import Img from 'gatsby-image'

export default () => {
  // const productsEdges = data && data.homeProducts
  // const productsNodes = mapEdgesToNodes(productsEdges)

  return (
    <section>
      <Container>
        <Styled.h2>404 - Page Not Found :(</Styled.h2>
        <p>The page you're looking for doesn't exist. Please use the navigation menu to search for a page that does exist.</p>
      </Container>
    </section>
  )
}
