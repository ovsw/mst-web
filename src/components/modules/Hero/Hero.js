/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React, {useState, useEffect} from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import './Hero.css'

const Hero = () => {
  const [courtainClass, setCourtainClass] = useState('')
  useEffect(() => {
    setCourtainClass('open')
  })
  return (
    <section className='hero hero--performances'>
      <video className='hero__video-bg' playsInline='' autoPlay={false} muted loop poster='/images/video-placeholder.jpg' id='heroVideo'>
        <source data-src='https://lrw-ac97.kxcdn.com/mainstages-families-bg-video.mp4' type='video/mp4' src='https://lrw-ac97.kxcdn.com/mainstages-families-bg-video.mp4' />
        {/* http://odcv-ac97.kxcdn.com/oasis-intro-short-hq.mp4  */}
        {/* <source src="http://odcv-ac97.kxcdn.com/oasis-intro-short-hq.ogv" type="video/ogg"/>
        <source src="http://odcv-ac97.kxcdn.com/oasis-intro-short-hq.webm" type="video/webm">  */}
      </video>

      <div className='hero__content'>
        <h1 className='hero__heading'>mainstages: LIVE!</h1>
        <p className='hero__hookline'><span>Virtual shows and programs for your community on ZOOM!</span></p>
        <a className='button hero__cta' href='/virtual/mainstages-live-at-home/'>Join in on the Digital Fun!</a>
      </div>
      <img className={`hero__left-curtain ${courtainClass}`} src='/images/left-courtain.png' />
      <img className={`hero__right-curtain ${courtainClass}`} src='/images/right-courtain.png' />
    </section>
  )
}

export default Hero
