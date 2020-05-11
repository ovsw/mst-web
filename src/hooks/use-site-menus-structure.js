import {useStaticQuery, graphql} from 'gatsby'
import {mapEdgesToNodes} from '../utils/helpers'

export const useSiteMenusStructure = () => {
  const {allSanityMenus} = useStaticQuery(
    graphql`
    query {
      allSanityMenus {
        edges {
          node {
            id
            title
            items {
              ... on SanityInternalLink {
                title
                link {
                  content {
                    main {
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              ... on SanityInternalLinkWChildren {
                title
                link {
                  content {
                    main {
                      slug {
                        current
                      }
                    }
                  }
                }
                subItems {
                  ... on SanityInternalLink {
                    title
                    link{
                      content{
                        main{
                          slug{
                            current
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  )
  return mapEdgesToNodes(allSanityMenus)
}
