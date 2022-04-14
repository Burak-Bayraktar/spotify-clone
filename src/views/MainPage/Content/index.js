import React from 'react'
import './style.scss'

const Content = () => {
  return (
    <div className="content-container">
      <div className='content-container-body'>
        <span className='title'>Dinlemek her şeydir</span> <br />
        <span className='content'>Milyonlarca şarkı ve podcast. Kredi kartına gerek yok.</span>
      </div>
      <div className='content-container-footer'>
        <a href='#'>Spotify Free'yi Edin</a>
      </div>
    </div>
  )
}

export default Content