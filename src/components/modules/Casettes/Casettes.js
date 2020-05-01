/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React, {useContext} from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import Casette from './Casette'

import './Casettes.css'

const Casettes = () => {
  return (
    <section className='slidecards'>
      <div className='slidecards__heading-wrapper'>
        <h2>Virtual Offerings</h2>
      </div>

      <div className='slidecards__cards-wrapper'>
        {casettesTempContent.map(casette => <Casette key={casette.url} {...casette} />)}
      </div>

    </section>
  )
}

export default Casettes

const casettesTempContent = [
  {
    title: 'Weekly Classes for Kids',
    subtitle: 'Interactive, Fun, Personalized',
    description: 'These virtual classes combine our arts education expertise with wacky fun!',
    url: '/'
  },
  {
    title: 'Weekly Classes for Kids',
    subtitle: 'Interactive, Fun, Personalized',
    description: 'These virtual classes combine our arts education expertise with wacky fun!',
    url: '/'
  },
  {
    title: 'Weekly Classes for Kids',
    subtitle: 'Interactive, Fun, Personalized',
    description: 'These virtual classes combine our arts education expertise with wacky fun!',
    url: '/'
  },
  {
    title: 'Weekly Classes for Kids',
    subtitle: 'Interactive, Fun, Personalized',
    description: 'These virtual classes combine our arts education expertise with wacky fun!',
    url: '/'
  }
]
