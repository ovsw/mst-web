/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React, {useContext} from 'react' // eslint-disable-line

import TestimonialSlide from './TestimonialSlide'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './TestimonialSlider.css'

const TestimonialsSlideshow = ({data}) => {
  const {testimonials} = data
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: 1,
    customPaging: i => (
      <div
        sx={{
          width: '1rem',
          height: '1rem',
          fontSize: '1rem',
          opacity: '0.75',
          lineHeight: '1.5rem',
          bg: 'secondary',
          color: 'white',
          borderRadius: '100%',
          '.slick-active & ': {
            bg: 'primary',
            color: 'light'
          }
        }}
      />
    )
  }
  return (
    <section className='testimonial-slider' sx={{variant: 'sections.hpSection', bg: '#fbfde8'}}>
      <Slider {...slickSettings}>
        {testimonials.map(({_id, content, name, role}) => <TestimonialSlide key={_id} content={content} name={name} role={role} />)}
      </Slider>
    </section>

  )
}

export default TestimonialsSlideshow

const testimonialsTempContent = [
  {
    text: 'My child is so excited. I think this experience already has made her more confident. We are so grateful to you all for having this program, it really makes a huge impact on the kids!',
    author: 'Nina Livingston',
    role: 'Parent'
  },
  {
    text: 'My child is so excited. I think this experience already has made her more confident. We are so grateful to you all for having this program, it really makes a huge impact on the kids!',
    author: 'Nina Livingston',
    role: 'Parent'
  },
  {
    text: 'My child is so excited. I think this experience already has made her more confident. We are so grateful to you all for having this program, it really makes a huge impact on the kids!',
    author: 'Nina Livingston',
    role: 'Parent'
  },
  {
    text: 'My child is so excited. I think this experience already has made her more confident. We are so grateful to you all for having this program, it really makes a huge impact on the kids!',
    author: 'Nina Livingston',
    role: 'Parent'
  }
]
