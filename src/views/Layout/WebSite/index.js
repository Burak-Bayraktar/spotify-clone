import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'views/Layout/WebSite/Footer'
import Header from 'views/Layout/WebSite/Header'

const WebSiteLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default WebSiteLayout