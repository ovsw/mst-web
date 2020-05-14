/** @jsx jsx */
import {jsx, Styled} from 'theme-ui'
import React, {useState, useEffect} from 'react' // eslint-disable-line
import BlockContent from '@sanity/block-content-to-react'
import serializers from '../../utils/serializers'
import {Link} from 'gatsby'

import './videoHero.css'

const VideoHero = ({data}) => {
  const {buttonText, caption, image, text, title, url, video} = data
  console.log(buttonText)
  const [courtainClass, setCourtainClass] = useState('')
  useEffect(() => {
    setCourtainClass('open')
  })
  let videoSource = null
  switch (video) {
    case 'performances1' :
      videoSource = 'https://mstvideo-ac97.kxcdn.com/mainstages-intro-montage.mp4'
      break
    case 'live1' :
      videoSource = 'https://lrw-ac97.kxcdn.com/mainstages-families-bg-video.mp4'
      break
    default :
      videoSource = 'https://mstvideo-ac97.kxcdn.com/mainstages-intro-montage.mp4'
  }

  return (
    <section className='hero hero--performances'>
      <video className='hero__video-bg' playsInline='' autoPlay muted loop poster='/images/video-placeholder.jpg' id='heroVideo'>
        <source data-src={videoSource} type='video/mp4' src={videoSource} />
        {/* http://odcv-ac97.kxcdn.com/oasis-intro-short-hq.mp4  */}
        {/* <source src="http://odcv-ac97.kxcdn.com/oasis-intro-short-hq.ogv" type="video/ogg"/>
        <source src="http://odcv-ac97.kxcdn.com/oasis-intro-short-hq.webm" type="video/webm">  */}
      </video>

      <div className='hero__content'>
        <Styled.h1 className='hero__heading' sx={{color: 'primary'}}>{title}</Styled.h1>
        <div className='hero__hookline'><BlockContent blocks={text} serializers={serializers} /></div>
        <Link
          className='hero__cta' to={url} sx={{
            variant: 'buttons.simpleWhite'
          }}
        >{buttonText}
        </Link>
      </div>
      <img className={`hero__left-curtain ${courtainClass}`} src='/images/left-courtain.png' />
      <img className={`hero__right-curtain ${courtainClass}`} src='/images/right-courtain.png' />
    </section>
  )
}

export default VideoHero
