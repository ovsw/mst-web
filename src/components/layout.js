/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
