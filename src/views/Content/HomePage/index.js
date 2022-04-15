import React from 'react'
import './style.scss'

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className='home-page-container-body'>
        <span className='title'>Dinlemek her şeydir</span> <br />
        <span className='content'>Milyonlarca şarkı ve podcast. Kredi kartına gerek yok.</span>
      </div>
      <div className='home-page-container-footer'>
        <a href='#'>Spotify Free'yi Edin</a>
      </div>
    </div>
  )
}

export default HomePage