/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line

import {buildImageObj} from '../../utils/helpers' // cn
import {imageUrlFor} from '../../utils/image-url'

import './heroInnerModule.css'

const HeroInnerModule = ({data}) => {
  console.log(data)

  const desktopImageUrl = imageUrlFor(buildImageObj(data.image))
    .width(1920)
    // .height(Math.floor((9 / 16) * 600))
    // .height(thumbSize.height)
    .auto('format')
    .url()

  const tabletImageUrl = imageUrlFor(buildImageObj(data.image))
    .width(1200)
    // .height(Math.floor((11 / 16) * 1200))
    // .height(thumbSize.height)
    .auto('format')
    .url()

  const mobileImageUrl = imageUrlFor(buildImageObj(data.image))
    .width(768)
    // .height(Math.floor((11 / 16) * 1200))
    // .height(thumbSize.height)
    .auto('format')
    .url()

  return (
    <section className='basic-page__hero'>
      <div className='basic-page__hero-bg-image-source'>
        <picture>
          <source srcSet={mobileImageUrl} media='(max-width: 768px)' />
          <source srcSet={tabletImageUrl} media='(max-width: 1200px)' />
          <img className='basic-page__hero-bg-image' src={desktopImageUrl} alt={data.caption} />
        </picture>
      </div>

      <div className='basic-page__hero-overlay' />
      <div className='basic-page__hero-content'>
        <h1 className='basic-page__hero-title'>About Us</h1>
      </div>
    </section>
  )
}

export default HeroInnerModule
