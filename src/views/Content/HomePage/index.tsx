import React from 'react'
import { useUser } from '../../../contexts/UserContext'
import './style.scss'

const HomePage = () => {
  const user = useUser();
  return (
    <div className="home-page-container">
      <div className='home-page-container-body'>
        <span className='title'>Dinlemek her şeydir</span> <br />
        <span className='content'>Milyonlarca şarkı ve podcast. Kredi kartına gerek yok.</span>
      </div>
      <div className='home-page-container-footer'>
        {user.display_name 
        ? <a href='#'>Dinlemeye devam et</a> 
        : <a href='#'>Spotify Free'yi Edin</a>}
      </div>
    </div>
  )
}

export default HomePage