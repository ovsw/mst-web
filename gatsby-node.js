/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const fs = require('fs')

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createRedirect, createPage} = actions

  // fs.writeFile('./static/helloworld.txt', 'Hello World!', function (err) {
  //   if (err) return console.log(err)
  //   console.log('Hello World > helloworld.txt')
  // })

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
      allSanityPost(sort: {fields: content___main___publishedAt, order: DESC}) {
        edges {
          node {
            _rawContent(resolveReferences: {maxDepth: 9})
          }
        }
      }
      allSanityPageWizard {
        edges {
          node {
            _rawContent(resolveReferences: {maxDepth: 9})
          }
        }
      }
      sanityRedirects(_id: {eq: "redirects"}) {
        list {
          fromPath
          toPath
          isPermanent
        }
      }
    }
  `)

  if (pagesQuery.errors) {
    throw pagesQuery.errors
  }

  // redirects

  // redirect home page to /virtual/
  createRedirect({fromPath: '/', toPath: '/virtual/', isPermanent: true, force: true})

  // process redirects from Sanity
  const redirectsList = pagesQuery.data.sanityRedirects.list || []
  redirectsList.forEach(({fromPath, toPath, isPermanent}) => {
    reporter.info(`Creating redirect: ${fromPath} -> ${toPath} - ${isPermanent ? '301' : '302'}`)
    createRedirect({fromPath, toPath, isPermanent})
  })

  // pages

  const pages = pagesQuery.data.allSanityPage.edges || []
  const pagesHidden = pagesQuery.data.allSanityPageHidden.edges || []

  const allGeneralPages = [...pages, ...pagesHidden]

  const performancePages = pagesQuery.data.allSanityPagePerformance.edges || []

  const blogPostPages = pagesQuery.data.allSanityPost.edges || []

  const wizardPages = pagesQuery.data.allSanityPageWizard.edges || []

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

  wizardPages.forEach((edge, index) => {
    const path = `/${edge.node._rawContent.main.slug.current}/`

    reporter.info(`Creating wizard page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/wizard.js'),
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
