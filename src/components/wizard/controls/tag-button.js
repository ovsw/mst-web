/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line

const TagButton = ({tagGroup, title, allFilterClickListener}) => {
  return (
    <button onClick={e => allFilterClickListener(e, {tagGroup})}>{title}</button>
  )
}

export default TagButton
