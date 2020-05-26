/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions

  // Query Pages
  const pagesQuery = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            _rawContent(resolveReferences: {maxDepth: 9})
          }
        }
      }
      allSanityPageHidden {
        edges {
          node {
            _rawContent(resolveReferences: {maxDepth: 9})
          }
        }
      }
      allSanityPagePerformance {
        edges {
          node {
            _rawContent(resolveReferences: {maxDepth: 9})
          }
        }
      }
      allSanityPost {
        edges {
          node {
            _rawContent(resolveReferences: {maxDepth: 9})
          }
        }
      }
    }
  `)

  if (pagesQuery.errors) {
    throw pagesQuery.errors
  }

  const pages = pagesQuery.data.allSanityPage.edges || []
  const pagesHidden = pagesQuery.data.allSanityPageHidden.edges || []

  const allGeneralPages = [...pages, ...pagesHidden]

  const performancePages = pagesQuery.data.allSanityPagePerformance.edges || []

  const blogPostPages = pagesQuery.data.allSanityPost.edges || []

  allGeneralPages.forEach((edge, index) => {
    const path = `/${edge.node._rawContent.main.slug.current === 'home' ? '' : edge.node._rawContent.main.slug.current}/`

    reporter.info(`Creating page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/page.js'),
      context: {...edge.node._rawContent}
    })
  })

  performancePages.forEach((edge, index) => {
    const path = `/performances/${edge.node._rawContent.main.slug.current}/`

    reporter.info(`Creating performance page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/pagePerformance.js'),
      context: {...edge.node._rawContent}
    })
  })

  blogPostPages.forEach((edge, index) => {
    const path = `/blog/${edge.node._rawContent.main.slug.current}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/post.js'),
      context: {...edge.node._rawContent}
    })
  })

  // Query Products
  //   const productsQuery = await graphql(`
  //   {
  //     allSanityProduct {
  //       edges {
  //         node {
  //           _rawContent(resolveReferences: {maxDepth: 9})
  //         }
  //       }
  //     }
  //   }
  // `)

  //   if (productsQuery.errors) {
  //     throw productsQuery.errors
  //   }

  //   const products = productsQuery.data.allSanityProduct.edges || []
  //   products.forEach((edge, index) => {
  //   const path = `/products/${edge.node._rawContent.main.slug.current}`

  //     createPage({
  //       path,
  //       component: require.resolve('./src/templates/product.tsx'),
  //       context: {...edge.node._rawContent},
  //     })
  //   })

  //   // Query Collections
  //   const collectionsQuery = await graphql(`
  //   {
  //     allSanityCollection {
  //       edges {
  //         node {
  //           _rawContent(resolveReferences: {maxDepth: 9})
  //         }
  //       }
  //     }
  //   }
  // `)

  //   if (collectionsQuery.errors) {
  //     throw collectionsQuery.errors
  //   }

  //   const collections = collectionsQuery.data.allSanityCollection.edges || []
  //   collections.forEach((edge, index) => {
  //     const path = `/collection/${edge.node._rawContent.main.slug.current}`

//     createPage({
//       path,
//       component: require.resolve('./src/templates/page.tsx'),
//       context: {...edge.node._rawContent},
//     })
//   })
}
