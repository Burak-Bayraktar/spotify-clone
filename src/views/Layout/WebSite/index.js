import React from 'react'
import Footer from './Footer'
import Header from './Header'

const WebSiteLayout = ({ children }) => {
  return (
    <>
        <Header />
        { children }
        <Footer />
    </>
  )
}

export default WebSiteLayout