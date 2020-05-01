/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React, {useContext} from 'react' // eslint-disable-line
// import {Link} from 'gatsby'

const TestimonialSlide = ({text, author, role}) => {
  return (
    <div className='testimonial-slider__content'>
      <p className='testimonial-slider__text'><span>“ </span>{text}<span className='endquote'>”</span></p>
      <p className='testimonial-slider__author'>- {author} , <span className='testimonial-slider__company'>{role}</span></p>
    </div>
  )
}

export default TestimonialSlide
