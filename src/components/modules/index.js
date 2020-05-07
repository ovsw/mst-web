import React from 'react'

import StandardText from '../global/standardText'
// import ContentImage from '../global/contentImage'
import HeroInnerModule from '../global/heroInnerModule'
import ImageWTextOverModule from '../global/imageWTextOverModule'

const Modules = ({reactModule, type}) => {
  switch (type) {
    case 'standardText':
      return <StandardText data={reactModule} />
    // case 'imageModule':
    //   return <ContentImage data={reactModule} />
    case 'heroInnerModule':
      return <HeroInnerModule data={reactModule} />
    case 'imageWTextOverModule':
      return <ImageWTextOverModule data={reactModule} />
    default:
      return (<span>{type}</span>)
  }
}

export default Modules
