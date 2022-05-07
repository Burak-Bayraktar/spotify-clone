import React from 'react'
import { Outlet } from 'react-router-dom'

const WebPlayerLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default WebPlayerLayout