/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line

import Header from '../components/Header'
import Footer from '../components/Footer'

import './layout.css'

const Layout = ({children}) => {
  return (
    <div sx={{pt: '90px'}}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
