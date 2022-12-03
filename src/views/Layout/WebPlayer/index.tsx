import React from 'react';
import WebPlayerHeader from 'views/Layout/WebPlayer/Header';
import MainSection from 'views/Layout/WebPlayer/Main';
import WebPlayerSidebar from 'views/Layout/WebPlayer/Sidebar';
import NowPlayingBar from './NowPlayingBar';
import './style.scss';

const WebPlayerLayout = () => {
  return (
    <div className="web-player-container">
      <WebPlayerHeader />
      <WebPlayerSidebar />
      <MainSection />
      <NowPlayingBar />
    </div>
  );
};

export default WebPlayerLayout;
