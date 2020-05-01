/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React, {useEffect} from 'react' // eslint-disable-line
import {graphql, Link} from 'gatsby'
// import {mapEdgesToNodes, localizeText} from '../lib/helpers'
import Img from 'gatsby-image'

import Hero from '../components/modules/Hero'
import Casettes from '../components/modules/Casettes'
import Testimonials from '../components/modules/TestimonialsSlideshow'

export default (props) => {
  const {data, errors} = props
  // const productsEdges = data && data.homeProducts
  // const productsNodes = mapEdgesToNodes(productsEdges)

  return (
    <>
      <Hero />
      <Casettes />
      <Testimonials />
      <Container className='container'>
        <ul sx={{variant: 'lists.reset', display: 'flex'}}>
          {/* {productsNodes.map(({id, title, slug, images, price, vendor}) => (
          <li key={id} sx={{width: ['full', null, null, '1/2', '1/3']}}>
            <h3>{localizeText(title)}</h3>
            <p>{vendor.title}</p>
            <Link to={`/${slug.current}/`}>
              <Img fixed={images[0].asset.fixed} />
            </Link>
            <p>RON {price}</p>
            <Link to={`/${slug.current}/`}>Details</Link>
          </li>
        ))} */}
        </ul>
      </Container>
    </>
  )
}

export const query = graphql`
fragment SanityImage on SanityImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexProductsQuery {
    homeProducts: allSanityProduct {
      edges {
        node {
          id
          categories {
            _id
            title
          }
          title {
            en
            ro
          }
          images {
            asset {
              fixed(width: 400) {
                ...GatsbySanityImageFixed
              }
            }
          }
          slug {
            current
          }
          price
          vendor{
            title
          }
        }
      }
    }
  }
  
`
