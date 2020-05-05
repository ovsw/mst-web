/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React, {useEffect} from 'react' // eslint-disable-line
import {graphql, Link} from 'gatsby'
// import {mapEdgesToNodes, localizeText} from '../lib/helpers'
import Img from 'gatsby-image'

import Hero from '../components/modules/Hero'
import Casettes from '../components/modules/Casettes'
import Testimonials from '../components/modules/TestimonialsSlideshow'
import LargeImageWText from '../components/modules/LargeImageWText'

export default () => {
  // const productsEdges = data && data.homeProducts
  // const productsNodes = mapEdgesToNodes(productsEdges)

  return (
    <>
      <Hero />
      <Casettes heading='Virtual Offerings' />
      <Testimonials />
      <LargeImageWText />

    </>
  )
}

// export const query = graphql`
// fragment SanityImage on SanityImage {
//     crop {
//       _key
//       _type
//       top
//       bottom
//       left
//       right
//     }
//     hotspot {
//       _key
//       _type
//       x
//       y
//       height
//       width
//     }
//     asset {
//       _id
//     }
//   }

//   query IndexProductsQuery {
//     homeProducts: allSanityProduct {
//       edges {
//         node {
//           id
//           categories {
//             _id
//             title
//           }
//           title {
//             en
//             ro
//           }
//           images {
//             asset {
//               fixed(width: 400) {
//                 ...GatsbySanityImageFixed
//               }
//             }
//           }
//           slug {
//             current
//           }
//           price
//           vendor{
//             title
//           }
//         }
//       }
//     }
//   }

// `
