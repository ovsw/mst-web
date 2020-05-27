/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

const PerformancesContainer = ({performances}) => {
  console.log('performances prop in container', performances)
  return (
    <div sx={performanceListStyles}>
      {performances.map(({id, title, slug}) => (
        <Link key={id} to={`/performances/${slug}/`}>
          {title}
        </Link>
      ))}
    </div>
  )
}

export default PerformancesContainer

const performanceListStyles = {}
