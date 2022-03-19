import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const MainPage = () => {
  return (
    <div className='main-container'>
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default MainPage