import React from 'react'
import Helmet from 'react-helmet'

const siteRoute = 'https://www.mainstages.com'

const SEO = ({pagePath, metaInfo}) => {
  const title = metaInfo ? metaInfo.metaTitle ? metaInfo.metaTitle : 'mainstages' : 'mainstages'
  const metaDescription = metaInfo ? metaInfo.metaDescription ? metaInfo.metaDescription : 'mainstages default SEO description. this should not be here.' : 'mainstages default SEO description. this should not be here.'
  const metaKeywords = 'mainstages, theater, camp'
  const ogImage = metaInfo ? metaInfo.openImageUrl ? metaInfo.openImageUrl : '' : ''
  const twitterImage = metaInfo ? metaInfo.twitterImageUrl ? metaInfo.twitterImageUrl : '' : ''
  const openTitle = metaInfo ? metaInfo.openTitle ? metaInfo.openTitle : title : title
  const openGraphDescription = metaInfo ? metaInfo.openGraphDescription ? metaInfo.openGraphDescription : metaDescription : metaDescription
  const twitterTitle = metaInfo ? metaInfo.twitterTitle ? metaInfo.twitterTitle : title : title
  const twitterDescription = metaInfo ? metaInfo.twitterDescription ? metaInfo.twitterDescription : metaDescription : metaDescription

  return (
    <Helmet title={title}>
      <html lang='en' />
      <meta httpEquiv='Accept-CH' content='DPR, Width, Viewport-Width' />
      <meta property='og:locale' content='en_US' />
      <meta name='description' content={metaDescription} />
      <meta name='keywords' content={metaKeywords} />
      <meta
        property='og:url'
        content={`${siteRoute}/${pagePath || ''}`}
      />
      <meta property='og:image' content={ogImage} />
      <meta property='og:title' content={`${openTitle}`} />
      <meta property='og:site_name' content='Midway' />
      <meta property='og:description' content={openGraphDescription} />
      <meta name='twitter:site' content='@Midway' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={`${twitterTitle}`} />
      <meta name='twitter:image:src' content={twitterImage} />
      <meta name='twitter:description' content={twitterDescription} />
      <meta
        name='twitter:url'
        content={`${siteRoute}/${pagePath || ''}`}
      />
    </Helmet>
  )
}

export default SEO
