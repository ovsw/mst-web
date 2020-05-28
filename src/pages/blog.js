/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React, {useEffect} from 'react' // eslint-disable-line
import {graphql, Link} from 'gatsby'
import {mapEdgesToNodes} from '../utils/helpers'
// import SEO from '../components/seo'
// import RenderModules from '../utils/renderModules'
// import {graphql, Link} from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

const PostListItem = ({_rawContent: {main: {title, slug, excerpt}}}) => {
  console.log(title)
  return (
    <div sx={{variant: 'styles', mb: 5}}>
      <Styled.h2><Link to={`/blog/${slug.current}`} sx={{lineHeight: 'tight'}}>{title}</Link></Styled.h2>
      <BlockContent blocks={excerpt} />
    </div>
  )
}

const Page = ({data}) => {
  // console.log(mapEdgesToNodes(data.allSanityPost))

  return (
    <section sx={{variant: 'sections.default'}}>
      <Container sx={{maxWidth: '768px'}}>
        <Styled.h1 sx={{mb: 5}}>mainstages Blog</Styled.h1>

        {mapEdgesToNodes(data.allSanityPost).map((post) => {
          console.log(post)
          return (<PostListItem key={post._rawContent.main.slug.current} {...post} />)
        })}
      </Container>
    </section>
  )
}

export default Page

export const query = graphql`
  query HomePageQuery {
    allSanityPost {
      edges {
        node {
          _rawContent(resolveReferences: {maxDepth: 9})
        }
      }
    }
  }
`
