import React from 'react';
import { Outlet } from 'react-router-dom';

const WebPlayerLayout = () => {
  return (
    <div className="web-player-container">
      <Outlet />
    </div>
  );
};

export default WebPlayerLayout;
